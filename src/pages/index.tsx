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
  "outlier"
]

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const [selected, setSelected] = useState<string[]>(["sex", "relationships"])
  const [juicyness, setJuicyness] = useState(5)

  const handleSelect = (category: string) => {
    if (selected.includes(category)) {
      setSelected(selected => selected.filter(s => s !== category))
      return;
    }

    setSelected(selected => [...selected, category])
  }

  return (
    <>
      <Head>
        <title>Juicy QS</title>
        <meta name="description" content="Party game for juicy questions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] ">
        <div className="container flex flex-col items-start justify-center gap-12 px-6 py-16 max-w-2xl h-screen ">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Juicy <span className="text-[hsl(280,100%,70%)]">Questions</span>
          </h1>
          <div className="flex flex-col w-full text-2xl text-slate-300">
            <h2>Select Categories</h2>
            <div className="flex flex-col">

            {categories.map(c => (
              <div key={c} className="text-lg flex flex-row gap-x-2">
                <input type="checkbox" className="" checked={selected.includes(c)} onChange={e => {e.preventDefault(); handleSelect(c)}} />
                <label>
                {c}
                </label>
                
                </div>
              ))}
              </div>
          </div>
          <div className="flex flex-col w-full px-4 text-2xl text-slate-300 gap-y-2">
            <h2>Juiciness: {juicyness}</h2>
            <input type="range" className="w-full" min={1} max={10} value={juicyness} onChange={e => {e.preventDefault(); setJuicyness(parseInt(e.target.value))}}/>
          </div>

          <button className="w-full h-10 bg-purple-600 rounded-lg text-slate-300 text-xl!">
            Start the juice
          </button>
        </div>
      </main>
    </>
  );
}
