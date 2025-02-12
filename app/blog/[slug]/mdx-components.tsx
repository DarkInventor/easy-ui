import Image from "next/image"
// @ts-ignore
import { MDXComponents } from "mdx/types"

export const components: MDXComponents = {
  // @ts-ignore
  img: (props) => (
    <Image
      alt={props.alt || ""}
      width={800}
      height={400}
      className="rounded-lg"
      {...props}
    />
  ),
  // Add other custom components here
}
