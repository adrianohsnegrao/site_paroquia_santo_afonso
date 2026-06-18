import { newsPageData, type NewsArticle } from "@/data/newsPage";
import { newsDetails, type NewsDetail } from "@/data/newsDetails";
import { eventsPageData, type FeaturedEvent } from "@/data/eventsPage";
import { eventDetails, type EventDetail } from "@/data/eventDetails";
import { pastoralsPageData, type PastoralCard } from "@/data/pastoralsPage";

export async function getNoticias(): Promise<NewsArticle[]> {
  return newsPageData.news;
}

export async function getNoticiaBySlug(slug: string): Promise<NewsDetail | undefined> {
  return newsDetails.find((news) => news.slug === slug);
}

export async function getEventos(): Promise<FeaturedEvent[]> {
  return eventsPageData.featuredEvents;
}

export async function getEventoBySlug(slug: string): Promise<EventDetail | undefined> {
  return eventDetails.find((event) => event.slug === slug);
}

export async function getPastorais(): Promise<PastoralCard[]> {
  return pastoralsPageData.pastorals;
}
