import { loadEvents } from "./index";

test("loadEvents load events", async () => {
  const events = await loadEvents("scroll_login");
  expect(events).toBeTruthy();
});
