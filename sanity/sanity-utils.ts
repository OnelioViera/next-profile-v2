import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: '4fvu8wtf',
    dataset: 'production',
    apiVersion: '2021-06-09',
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      'slug': slug.current,
      'image': image.asset->url,
      url,
      content,

    }`
  );
}