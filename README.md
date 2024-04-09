# README

## Kevin Salinas

### To start this app:

1. Clone repository
2. Install dependencies with node or yarn
3. Expected version of Node is > 18 && npm > 7
4. Start JSON Server in port 3000 with npx `npx json-server ./public/db.json -p 3000`

5. Build Docker image `docker build -t myapp .`
6. Run Container `docker run -p 3000:3001 myapp`

7. (Optional) Run dev server `npm run dev` o `yarn dev`
