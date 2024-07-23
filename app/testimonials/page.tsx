import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Marcello Fonseca",
    username: "@Marcello Fonseca",
    body: "Very Nice!! 🔥🤯",
    img: "https://avatar.vercel.sh/rauchg.svg?text=MF",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211502593452216320?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211502593452216320%2C7211504229494984705%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287211504229494984705%2Curn%3Ali%3AugcPost%3A7211502593452216320%29"
  },
  {
    name: "Sayed Suliman",
    username: "@Sayed Suliman",
    body: "Can't wait! 🤯",
    img: "https://media.licdn.com/dms/image/D5603AQGnQm6vP_Jpfg/profile-displayphoto-shrink_400_400/0/1719313252960?e=1726099200&v=beta&t=ofZJFHCjptFjbV36l2H0uwHK3Koi50997F-B060kYgI",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211502593452216320?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211502593452216320%2C7211524681336553473%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287211524681336553473%2Curn%3Ali%3AugcPost%3A7211502593452216320%29"
  },
  {
    name: "Danny Chen",
    username: "@Danny Chen",
    body: "That is smooth like butter 🔥",
    img: "https://media.licdn.com/dms/image/D4E03AQEr0MxTYFRcXA/profile-displayphoto-shrink_400_400/0/1712139786929?e=1726704000&v=beta&t=S43JI2aycte_FAPS0PsBsDut3INoOpOjH3FQG5knH3c",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7211502593452216320?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7211502593452216320%2C7211509809668366336%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287211509809668366336%2Curn%3Ali%3AugcPost%3A7211502593452216320%29"
  },
  {
    name: "Dally R",
    username: "@Dally R",
    body: "Great job! Love this. I will go through and provide the feedback.",
    img: "https://media.licdn.com/dms/image/D4D35AQEl_EU_CVGi_w/profile-framedphoto-shrink_800_800/0/1711663894244?e=1721984400&v=beta&t=U6T8wSLRt7sEzlUWkIrT9OG_M3FXqUIAHJ2cSjv8Ocg",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7210915776176791555?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7210915776176791555%2C7211017051711111169%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287211017051711111169%2Curn%3Ali%3AugcPost%3A7210915776176791555%29"
  },
  {
    name: "Jerome Renard",
    username: "@Jerome Renard",
    body: "Looking really good!",
    img: "https://media.licdn.com/dms/image/D5603AQFJ_EY-hgejfQ/profile-displayphoto-shrink_400_400/0/1711319351530?e=1726099200&v=beta&t=Pz_zDhAI9PWDqxJpq_7pF8VDpH6Xr3jfsd503QwrFOU",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7210915776176791555?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7210915776176791555%2C7211032199658102784%29&replyUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7210915776176791555%2C7211032581247537153%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287211032199658102784%2Curn%3Ali%3AugcPost%3A7210915776176791555%29&dashReplyUrn=urn%3Ali%3Afsd_comment%3A%287211032581247537153%2Curn%3Ali%3AugcPost%3A7210915776176791555%29"
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  link,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  link: string;
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    </a>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative mt-10 flex size-full flex-col items-center justify-center overflow-hidden rounded-lg  pb-5">
      <div className="mx-auto flex max-w-full flex-col items-center space-y-4 pt-10 text-center">
                  <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-3xl font-bold sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%]">
                    Don&apos;t take our word for it
                  </h2>
                  <p className="text-muted-foreground sm:max-w-[85%] max-w-[85%] lg:max-w-[100%] md:max-w-[100%] pb-10 leading-normal sm:text-lg sm:leading-7">
                    Hear what <span className="font-bold">real people</span> have to say about us.
                  </p>
                </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-white"></div> */}
    </div>
  );
};

export default MarqueeDemo;
