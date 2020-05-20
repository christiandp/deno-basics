import { serve } from 'https://deno.land/std@0.51.0/http/server.ts';

const s = serve({ port: 8000 });

console.log("http://localhost:8000/");


const removeLastSlash = (url: string) => {
    if (url.substring(url.length-1) == "/" && url.length > 1)
    {
        url = url.substring(0, url.length-1);
    }
    return url;
}


for await (const req of s) {

	const urlEnc = removeLastSlash(req.url);

	switch (urlEnc) {
		case '/':
			req.respond({ 
		  	body: "Home page" 
		  });
			break;
		case '/about':
			req.respond({ 
		  	body: "About page" 
		  });
			break;
		case '/contact':
			req.respond({ 
		  	body: "Contact page" 
		  });
			break;
		
		default:
			req.respond({ 
		  	body: "404 - Not Found" 
		  });
			break;
	}
	

}