export default function (server) {

  server.route({
    path: '/api/myphotos/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}
