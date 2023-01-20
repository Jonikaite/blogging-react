import { render, screen } from "@testing-library/react";
import { RecordListPage } from "./RecordList";

test("Record List initial render", () => {
  render(<RecordListPage />);
  const title = screen.getByText("Records");
  expect(title).toBeDefined();
});
