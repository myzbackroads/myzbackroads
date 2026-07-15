const featuredRelease = {
  eyebrow: "Featured release",
  title: "Embrace Yourself",
  date: "July 17, 2026",
  art: "embrace-yourself.png",
  alt: "Embrace Yourself single cover art",
  description:
    "A warm country-soul reminder that belonging starts with accepting the person you already are.",
  story:
    "Written for anyone who has felt out of place, this song turns a hard road into an invitation to stand taller, breathe easier, and keep walking forward.",
  links: {
    youtube: "https://www.youtube.com/shorts/0XKMZEgj9PE",
    spotify: "https://open.spotify.com/playlist/0c64zK7VqUoXVB45qRaXF9",
    appleMusic:
      "https://music.apple.com/us/playlist/myz-backroads-real-stories-real-struggles/pl.u-e98lkypIMzJ3W9",
    bandcamp: "https://myzbackroads.bandcamp.com/",
  },
};

const songs = [
  featuredRelease,
  {
    eyebrow: "Veteran story",
    title: "Combat Cowboy",
    art: "combat-cowboy.png",
    alt: "Combat Cowboy single cover art",
    description:
      "A country story of service, memory, strength, and what follows a soldier home.",
    story:
      "Built around the grit and tenderness of a veteran life, this track honors courage without pretending the road home is easy.",
    links: {
      youtube: "https://www.youtube.com/shorts/G30Xathik_0",
      bandcamp: "https://myzbackroads.bandcamp.com/track/combat-cowboy",
    },
  },
  {
    eyebrow: "Forgiveness and freedom",
    title: "Let It Go",
    art: "let-it-go.png",
    alt: "Let It Go single cover art",
    description:
      "A country-soul song about releasing the weight of the past and choosing peace.",
    story:
      "A steady, hopeful song for the moment when carrying old pain costs more than setting it down.",
    links: {
      youtube: "https://youtube.com/shorts/8tCPugw9RLw",
      bandcamp: "https://myzbackroads.bandcamp.com/track/let-it-go",
    },
  },
  {
    eyebrow: "Friendship and memory",
    title: "A Friend I Used to Know",
    art: "A-friend-i-use-to-know.png",
    alt: "A Friend I Used to Know single cover art",
    description:
      "A deeply personal reflection on friendship, loss, trust, and the memories that remain.",
    story:
      "For the people who shaped us, drifted away, or left a mark that time never fully erased.",
    links: {
      bandcamp:
        "https://myzbackroads.bandcamp.com/track/a-friend-i-used-to-know",
    },
  },
  {
    eyebrow: "Recovery and survival",
    title: "Along the Way",
    art: "along-the-way.png",
    alt: "Along the Way single cover art",
    description:
      "A raw look at addiction, consequences, survival, and the hard-earned lessons found along the way.",
    story:
      "This song meets the listener in the wreckage and points toward the grace of another chance.",
    links: {
      bandcamp: "https://myzbackroads.bandcamp.com/track/along-the-way",
    },
  },
  {
    eyebrow: "Country gospel",
    title: "The Lord Kept Me",
    art: "lord-kept-me.svg",
    alt: "The Lord Kept Me single cover art",
    description:
      "A testimony about surviving the hardest chapters and recognizing the grace that carried you.",
    story:
      "A faith-rooted reflection on protection, mercy, and the quiet strength that shows up when life gets heavy.",
    links: {},
  },
  {
    eyebrow: "Healing and hope",
    title: "Hug a Horse",
    art: "hug-a-horse.svg",
    alt: "Hug a Horse single cover art",
    description:
      "A tribute to the quiet healing, trust, and peace found through horses.",
    story:
      "Inspired by the grounding calm of horses and the way they help people feel safe enough to heal.",
    links: {
      youtube: "https://youtu.be/Vql5kVDGSD0",
    },
  },
  {
    eyebrow: "Identity and belonging",
    title: "Men Like Me",
    art: "men-like-me.svg",
    alt: "Men Like Me single cover art",
    description:
      "A heartfelt song about honesty, identity, and the courage to be seen.",
    story:
      "A compassionate anthem for anyone learning to tell the truth about who they are.",
    links: {},
  },
  {
    eyebrow: "Awareness and courage",
    title: "Leave While You Can",
    art: "leave-while-you-can.svg",
    alt: "Leave While You Can single cover art",
    description:
      "A direct, compassionate song about recognizing harm and finding the courage to walk away.",
    story:
      "Written as a lifeline, this song speaks to the moment when choosing safety becomes the brave next step.",
    links: {},
  },
];

const platforms = {
  youtube: "YouTube",
  spotify: "Spotify",
  appleMusic: "Apple Music",
  bandcamp: "Bandcamp",
};

const makePlatformLinks = (links, primaryLabel = "Watch on YouTube") =>
  Object.entries(platforms)
    .filter(([key]) => links[key])
    .map(([key, label]) => {
      const text = key === "youtube" ? primaryLabel : label;
      const style = key === "youtube" ? "button-primary" : "button-ghost";
      return `<a class="button button-small ${style}" href="${links[key]}" target="_blank" rel="noopener">${text}</a>`;
    })
    .join("");

const featuredMount = document.querySelector("[data-featured-release]");
if (featuredMount) {
  featuredMount.innerHTML = `
    <article class="featured-release-card">
      <div class="featured-release-art">
        <img src="${featuredRelease.art}" alt="${featuredRelease.alt}" width="900" height="900" loading="eager" decoding="async" fetchpriority="high">
      </div>
      <div class="featured-release-copy">
        <p class="eyebrow">${featuredRelease.eyebrow}</p>
        <h2 id="featured-release-title">${featuredRelease.title}</h2>
        <p class="release-date">Available ${featuredRelease.date}</p>
        <p>${featuredRelease.description}</p>
        <p class="story-note">${featuredRelease.story}</p>
        <div class="track-actions">${makePlatformLinks(featuredRelease.links)}</div>
        <a class="button button-primary listen-now" href="#music">Listen now</a>
      </div>
    </article>`;
}

const musicMount = document.querySelector("[data-song-grid]");
if (musicMount) {
  musicMount.innerHTML = songs
    .map(
      (song, index) => `
      <article class="track-card ${index === 0 ? "featured" : ""}">
        <img src="${song.art}" alt="${song.alt}" width="900" height="900" loading="lazy" decoding="async">
        <div class="track-info">
          <span>${song.eyebrow}</span>
          <h3>${song.title}</h3>
          <p>${song.description}</p>
          ${song.story ? `<details><summary>Story behind the song</summary><p>${song.story}</p></details>` : ""}
          ${Object.keys(song.links).length ? `<div class="track-actions">${makePlatformLinks(song.links, "YouTube")}</div>` : ""}
        </div>
      </article>`,
    )
    .join("");
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.querySelector(".sr-only").textContent = isOpen
      ? "Close menu"
      : "Open menu";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.querySelector(".sr-only").textContent = "Open menu";
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
