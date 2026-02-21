type FeedItem = {
  title: string;
  link: string;
  date: string;
  excerpt: string;
};

const FEED_URL = "https://www.dinnerpartyai.com/feed";

const parseTag = (item: string, tag: string) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  return match ? match[1].trim() : "";
};

const cleanText = (value: string) =>
  value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();

const extractItems = (xml: string): FeedItem[] => {
  const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)).map(
    (match) => match[1]
  );

  return items.slice(0, 4).map((item) => {
    const title = cleanText(parseTag(item, "title")) || "Untitled post";
    const link = cleanText(parseTag(item, "link")) || "https://www.dinnerpartyai.com";
    const dateRaw = cleanText(parseTag(item, "pubDate"));
    const date = dateRaw
      ? new Date(dateRaw).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "";
    const excerptSource =
      parseTag(item, "description") || parseTag(item, "content:encoded");
    const excerpt = cleanText(excerptSource).slice(0, 180);

    return { title, link, date, excerpt };
  });
};

async function getFeedItems(): Promise<FeedItem[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });

    if (!res.ok) {
      return [];
    }

    const xml = await res.text();
    return extractItems(xml);
  } catch {
    return [];
  }
}

const SubstackFeed = async () => {
  const items = await getFeedItems();

  if (items.length === 0) {
    return (
      <div className="substack-wrap">
        <p className="feed-empty">
          Feed is temporarily unavailable. You can read directly on{" "}
          <a href="https://www.dinnerpartyai.com" target="_blank" rel="noreferrer">
            dinnerpartyai.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="substack-wrap">
      <ul className="feed-list">
        {items.map((item) => (
          <li key={item.link} className="feed-item">
            <a href={item.link} target="_blank" rel="noreferrer">
              <p className="feed-date">{item.date}</p>
              <h3>{item.title}</h3>
              {item.excerpt && <p className="feed-excerpt">{item.excerpt}...</p>}
              <span className="feed-read">Read post ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubstackFeed;
