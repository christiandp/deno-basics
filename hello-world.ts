import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");

for await (const req of s) {
  req.respond({ 
  	body: "Hello World" 
  });
  //console.log(req.url);
}