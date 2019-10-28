import { loadEvents } from "./index";

test("loadEvents load events", async () => {
  const events = await loadEvents("login");
  expect(events).toBeTruthy();
});
