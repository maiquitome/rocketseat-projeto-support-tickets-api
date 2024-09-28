export function index({ request, response, database }) {
  const { status } = request.query;

  // console.log(status); => closed, open...

  const tickets = database.select("tickets");

  return response.end(JSON.stringify(tickets));
}
