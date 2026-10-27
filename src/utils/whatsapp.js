import { WHATSAPP_NUMERO } from '../config.js'
import { formatarPreco } from './formatarPreco.js'

// Gera: "Olá, gostaria de pedir 2x Brigadeiro e 1x Bolo de Pote. Total: R$ 25,00"
export function montarLinkWhatsApp(itens, total) {
  const partes = itens.map((item) => `${item.quantidade}x ${item.nome}`)
  const lista =
    partes.length > 1
      ? `${partes.slice(0, -1).join(', ')} e ${partes[partes.length - 1]}`
      : partes[0]

  const mensagem = `Olá, gostaria de pedir ${lista}. Total: ${formatarPreco(total)}`
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
}
