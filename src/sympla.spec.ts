import { Sympla } from "./sympla";
import { QueryListarEventos } from "./model/queryEventos";

let sympla = new Sympla("9bb143b70675af1f680ad7a932850469bc17e64c7d570ca9508dfdb522ab9dac");
let queryListarEventos = new QueryListarEventos('');

// queryListarEventos.fields = "id";
queryListarEventos.published = false;

// sympla.listarEventos(queryListarEventos)
// .then((result) => {
//   console.log('listarEventos', result)
// })

// sympla.listarEventosID(419841)
// .then((result) => {
//   console.log('listarEventosID', result)
// })

// sympla.listarPedidosEvento(419841)
// .then((result) => {
//   console.log('listarPedidosEvento', result)
// })

// sympla.listarPedidosIdentificador(419841, 'Q913ECPJ')
// .then((result) => {
//   console.log('listarPedidosIdentificador', result)
// })

// sympla.listarParticipantesPedido(419841, 'Q913ECPJ')
// .then((result) => {
//   console.log('listarParticipantesPedido', result)
// })

// sympla.listarParticipantesEvento(419841)
// .then((result) => {
//   console.log('listarParticipantesEvento', result)
// })

sympla.listarParticipantesIngresso(419841, 30661003)
.then((result) => {
  console.log('listarParticipantesIngresso', result)
})