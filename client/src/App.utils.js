import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
    locale: ptBR,
  });
};
