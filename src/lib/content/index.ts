import { newsPageData, type NewsArticle } from "@/data/newsPage";
import { getNewsBySlug, type NewsDetail } from "@/data/newsDetails";
import { eventsPageData, type FeaturedEvent } from "@/data/eventsPage";
import { getEventBySlug, type EventDetail } from "@/data/eventDetails";
import { pastoralsPageData, type PastoralCard } from "@/data/pastoralsPage";

export async function getNoticias(): Promise<NewsArticle[]> {
  return newsPageData.news;
}

export async function getNoticiaBySlug(slug: string): Promise<NewsDetail | undefined> {
  return getNewsBySlug(slug);
}

export async function getEventos(): Promise<FeaturedEvent[]> {
  return eventsPageData.featuredEvents;
}

export async function getEventoBySlug(slug: string): Promise<EventDetail | undefined> {
  return getEventBySlug(slug);
}

export async function getPastorais(): Promise<PastoralCard[]> {
  return pastoralsPageData.pastorals;
}
