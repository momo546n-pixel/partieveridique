"use client";

import { useState, useTransition } from "react";
import { Check, Mail, MailOpen, Trash2 } from "lucide-react";
import { basculerLu, supprimerMessage } from "@/app/admin/(shell)/messages/actions";
import { formatDate } from "@/utils";
import type { Message } from "@/types";

export default function MessagesTable({ messages }: { messages: Message[] }) {
  const [liste, setListe] = useState(messages);
  const [enAttente, startTransition] = useTransition();
  const [messageOuvert, setMessageOuvert] = useState<string | null>(null);

  const basculer = (id: string, lu: boolean) => {
    setListe((prev) => prev.map((m) => (m.id === id ? { ...m, lu } : m)));
    startTransition(() => {
      basculerLu(id, lu);
    });
  };

  const supprimer = (id: string) => {
    if (!confirm("Supprimer ce message définitivement ?")) return;
    setListe((prev) => prev.filter((m) => m.id !== id));
    startTransition(() => {
      supprimerMessage(id);
    });
  };

  return (
    <div className="space-y-3">
      {liste.map((message) => {
        const estOuvert = messageOuvert === message.id;
        return (
          <div
            key={message.id}
            className={"carte p-5 " + (!message.lu ? "border-l-4 border-vert-principal" : "")}
          >
            <div className="flex items-start justify-between gap-4">
              <button
                className="text-left flex-1 min-w-0"
                onClick={() => {
                  setMessageOuvert(estOuvert ? null : message.id);
                  if (!message.lu) basculer(message.id, true);
                }}
              >
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="font-semibold text-noir-parti">{message.nom}</p>
                  {!message.lu && <span className="badge-or text-2xs px-2 py-0.5">Non lu</span>}
                </div>
                <p className="text-sm text-gris-moyen mt-0.5">
                  {message.telephone}
                  {message.email ? " · " + message.email : ""}
                </p>
                <p className={"text-sm text-noir-parti mt-2 " + (estOuvert ? "" : "line-clamp-2")}>
                  {message.message}
                </p>
              </button>

              <div className="flex flex-col items-end gap-2 shrink-0">
                <span className="text-xs text-gris-moyen whitespace-nowrap">
                  {formatDate(message.created_at)}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => basculer(message.id, !message.lu)}
                    disabled={enAttente}
                    title={message.lu ? "Marquer comme non lu" : "Marquer comme lu"}
                    className="p-2 rounded-lg text-gris-moyen hover:bg-vert-clair hover:text-vert-secondaire transition-colors"
                  >
                    {message.lu ? <Mail size={16} /> : <MailOpen size={16} />}
                  </button>
                  <button
                    onClick={() => supprimer(message.id)}
                    disabled={enAttente}
                    title="Supprimer"
                    className="p-2 rounded-lg text-gris-moyen hover:bg-rouge-clair hover:text-rouge transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {liste.length === 0 && (
        <div className="carte p-10 text-center">
          <Check size={28} className="mx-auto text-gris-moyen mb-2" />
          <p className="text-gris-moyen">Tous les messages ont été traités.</p>
        </div>
      )}
    </div>
  );
}
