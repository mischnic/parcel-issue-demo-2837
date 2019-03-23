import { types } from "mobx-state-tree";

const App = types
  .model({
    count: 0
  })
  .actions(self => ({
    inc() {
      self.count = self.count + 1;
    }
  }));

export default App;
