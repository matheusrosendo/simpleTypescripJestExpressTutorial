import app from "./app";

const PORT: Number = 80;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));