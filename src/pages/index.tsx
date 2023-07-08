import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { api } from "~/utils/api";

const categories = [
  "sex",
  "romantic",
  "relationships",
  "money",
  "career",
  "family",
  "soft points",
  "plans",
  "dares",
  "each other",
  "outlier",
];

export default function Home() {
  
  const [selected, setSelected] = useState<string[]>(["sex", "relationships"]);
  const [juicyness, setJuicyness] = useState(5);
  const [showSettings, setShowSettings] = useState(true);

  const question = api.questions.random.useQuery({ categories: selected, maxJuiciness: juicyness });
  
  const handleSelect = (category: string) => {
    if (selected.includes(category)) {
      setSelected((selected) => selected.filter((s) => s !== category));
      return;
    }

    setSelected((selected) => [...selected, category]);
  };

  async function handleNewQuestion () {
    await question.refetch();
    return;
  }

  return (
    <>
      <Head>
        <title>Juicy QS</title>
        <meta name="description" content="Party game for juicy questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] ">
        <div className="container flex h-screen max-w-2xl flex-col items-start justify-center gap-12 px-6 py-16 ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Juicy <span className="text-[hsl(280,100%,70%)]">Questions</span>
          </h1>
          <button
            className="h-10 text-xl text-slate-300"
            onClick={(e) => {
              e.preventDefault();
              setShowSettings((prev) => !prev);
            }}
          >
            {showSettings ? "Hide" : "Show"} Settings
          </button>
          {showSettings && (
            <>
              <div className="flex w-full flex-col text-2xl text-slate-300">
                <h2>Select Categories</h2>
                <div className="flex flex-col">
                  {categories.map((c) => (
                    <div key={c} className="flex flex-row gap-x-2 text-lg">
                      <input
                        type="checkbox"
                        className=""
                        checked={selected.includes(c)}
                        onChange={(e) => {
                          e.preventDefault();
                          handleSelect(c);
                        }}
                      />
                      <label>{c}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col gap-y-2 px-4 text-2xl text-slate-300">
                <h2>Juiciness: {juicyness}</h2>
                <input
                  type="range"
                  className="w-full"
                  min={1}
                  max={10}
                  value={juicyness}
                  onChange={(e) => {
                    e.preventDefault();
                    setJuicyness(parseInt(e.target.value));
                  }}
                />
              </div>
            </>
          )}

          {!showSettings && (
            <div className="flex flex-wrap text-medium text-2xl text-purple-300 justify-center w-full px-6">
            <p className="">
            {question.data?.question}
            </p>
            </div>
          )}


          <button className="text-xl! h-10 w-full rounded-lg bg-purple-600 text-slate-300" onClick={() => {void handleNewQuestion()}}>
            Next
          </button>
        </div>
      </main>
    </>
  );
}
