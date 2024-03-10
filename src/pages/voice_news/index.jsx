/* eslint-disable react/jsx-key */
import { useState, useEffect, useMemo } from "react";
import "./index.scss";
import { fetchNews } from "../../service";
import { Microphone, MicrophoneOff } from "../../assets/svgs";
import { NewsCard } from "../../components";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";
const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);
  const [news, setNews] = useState(null);
  useEffect(() => {
    handleListen();
  }, [isListening]);
  
  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue..");
        mic.start();
      };
    } else {
      mic.stop();
      fetchNews(note).then((data) => setNews(data));
      mic.onend = () => {
        console.log("Stopped Mic on Click");
        console.log(news);
        setNote("");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      if (transcript.includes("stop recording")) {
        setIsListening(false);
      }
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note]);
    setNote("");
  };
  //   add memo for fetchNews
  const memoizedFetchNews = useMemo(() => fetchNews, []);
  return (
    <div className="voice-news">
      <button
        onClick={() => setIsListening(!isListening)}
        className={
          `bg-blue-400 text-white px-3 py-2 text-sm font-medium ` +
          (isListening ? "active" : "")
        }
        datatype="forrecord"
      >
        {isListening ? <MicrophoneOff /> : <Microphone />}
      </button>
      <div className="title text-2xl font-bold italic">
        {note ? note : "latest news"}
      </div>
      <div className="news-list flex flex-row flex-wrap justify-between gap-3 mt-16">
        {
        news && news.articles.slice(0,52).map((article) => (
            <NewsCard key={article.url}
              author={article.author}
              description={article.description}
              imageUrl={article.urlToImage}
              publishedAt={new Date(article.publishedAt).toLocaleDateString()}
              sourceName={article.source.name}
              title={article.title}
              url={article.url}
            />
        ))
        }
      </div>
    </div>
  );
};

export default Index;
