import { useState } from "react";
import { episodeList } from "../../../dark-echoes1/src/data";

export default function App() {
 {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const handleClick = () => {
    alert("Button clicked!");
  };

  /** Detailed information about the selected episode */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2> Episode {selectedEpisode.id}: {selectedEpisode.title} </h2>
        <p>{selectedEpisode.description}</p>
        <button className="button" onClick={handleClick}>
       Watch Now
        </button>
       
      </section>
    );
  }

  /** List of episodes that a user can select from */
  function List() {
    return (
      <section className="list">
        <h2>Episode List</h2>
        <ul className="list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <List />
        <EpisodeDetails />
      </main>
    </>
  );
}
 // TODO
}
