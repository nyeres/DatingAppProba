
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class HelloController : ControllerBase
    {
        private int b;
        private int c;


        //Sima hello world kiiras
        [HttpGet]
        public ActionResult <string> Get(){
            return "Hello World!";
        }

        //negyzetre es kobre emel, kiirja hello world
        [HttpGet("{a}")]        
        public ActionResult <string> Get(int a){
            b = a * a;
            c = a * a * a;
            return a.ToString()+"^2 = " + b.ToString() +"\n" +
            a.ToString()+"^3 = " + c.ToString() + "\n\nHello World!";
        }

        //ket szamot beker kiirja hello world
        [HttpGet("{a},{e}")]        
        public ActionResult <string> Get(int a, int e){
            if (e<=0 )
                e = 1;
            b = a * e;
            if (e>1)
                c = a * a;
                else c = a;
            if (e>2)
            for(int i=2; i<e; ++i)
                c = c * a ;
            return a.ToString()+"*"+e.ToString()+" = " + b.ToString() +"\n" +
            a.ToString()+"^" + e.ToString() + " = " + c.ToString() + "\n\nHello World!";
        }
    }
}