
(function(Scratch){
var getmessage,new_Window
var route=[];
var HTML='';
var script;
const image='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI5Mi44NjQ0NTM3MzI4NzcwNyIgaGVpZ2h0PSIxMDguNTg5NjIwMDUzNjc3ODUiIHZpZXdCb3g9IjAuOTE2ODg1NTI1MDMzMzI5NCAwLjc2NzAwODMzNDQ0MzQyNDYgOTIuODY0NDUzNzMyODc3MDcgMTA4LjU4OTYyMDA1MzY3Nzg1Ij4KICA8IS0tIEV4cG9ydGVkIGJ5IFNjcmF0Y2ggLSBodHRwOi8vc2NyYXRjaC5taXQuZWR1LyAtLT4KICA8ZyBpZD0iSUQwLjgzMjM4Mjk3Mzc0OTE5MDYiPgogICAgPHBhdGggaWQ9IlJfTGVnIiBmaWxsPSIjRkZDOTNFIiBzdHJva2U9IiM2MDM4MTMiIHN0cm9rZS13aWR0aD0iMS4zMjY4NDA4MTc4MzgwMDQyIiBkPSJNIDQ3LjI1ODQgOTcuNTU3NyBDIDQ3LjI1ODQgOTYuMTkzIDQ3LjY0MTIgOTQuMjMyNiA0OS43NTg4IDkzLjc5MDEgQyA1Mi44MTM5IDkzLjE0OTIgNTYuMzA5NCA5Ni4yNDI4IDU3LjI2MDEgOTcuMTUzIEMgNTcuMTg5OCA5Ny41MTUyIDU4LjM3ODYgMTA0LjgyMzQgNTguMzc4NiAxMDUuNDU3IEMgNTguMzc4NiAxMDcuNTk5MiA1Ny44MDYxIDEwNy42ODQxIDU3LjU4MzkgMTA3LjcxOTMgQyA1NS40OTIxIDEwOC4wMjM4IDQ5LjkxNzQgMTAyLjE2MTggNDcuMzU4NiA5OC43NTEyIEMgNDcuMzIzNCA5OC41NjYxIDQ3LjI1ODQgOTguMTU0MSA0Ny4yNTg0IDk3LjU1NzcgTCA0Ny4yNTg0IDk3LjU1NzcgTCA0Ny4yNTg0IDk3LjU1NzcgWiAiLz4KICAgIDxwYXRoIGlkPSJDZW50ZXJfTGVnIiBmaWxsPSIjRkZDOTNFIiBzdHJva2U9IiM2MDM4MTMiIHN0cm9rZS13aWR0aD0iMS4zMjY4NDA4MTc4MzgwMDQyIiBkPSJNIDM4Ljc4NzggMTA3Ljc5ODIgQyAzNy4yNzEzIDEwNi4xNTI5IDM3LjA1NSAxMDEuNjk0MSAzNy4wNTUgOTkuNzk3NCBDIDM3LjA1NSA5OC45OTI2IDM3LjA5NjEgOTguNDU3MyAzNy4wOTgxIDk4LjQ0MDcgTCAzNy4xMDA4IDk4LjM5OTUgQyAzNy4xMDA4IDk4LjM5OTUgMzcuMDk2MSA5OC4yMjc3IDM3LjA5NjEgOTguMTY0NyBDIDM3LjA5NjEgOTQuNTkyOCA0MC4zODQ3IDkzLjM1MjkgNDAuOTQyIDkzLjE2NjUgQyA0Mi44NDYgOTMuMTg5NyA0Ni4xMzcyIDk0LjA5MDYgNDYuOTIyNyA5NS40NSBDIDQ3LjAwMjMgOTUuNTg2NiA0Ny4wNzY2IDk1Ljc1OTEgNDcuMDc2NiA5NS45OCBDIDQ3LjA3NjYgOTYuMTczOCA0Ny4wMTg5IDk2LjQwODYgNDYuODU0NCA5Ni42OTE5IEMgNDYuNzc4MSA5Ni44MjE5IDQ1LjQyNiAxMDAuMDE3IDQ0LjI4MjMgMTAyLjQ2NyBMIDQzLjQ2NSAxMDQuNzMyNiBDIDQyLjg1MzMgMTA2LjcxMjIgNDEuODkwNyAxMDguNjkzMiA0MC44NDMxIDEwOC42OTMyIEMgNDAuMDE1MiAxMDguNjk0NSAzOS4zNDMxIDEwOC40MDEzIDM4Ljc4NzggMTA3Ljc5ODIgTCAzOC43ODc4IDEwNy43OTgyIEwgMzguNzg3OCAxMDcuNzk4MiBaICIvPgogICAgPHBhdGggaWQ9IlJfQXJtIiBmaWxsPSIjRkZDOTNFIiBzdHJva2U9IiM2MDM4MTMiIHN0cm9rZS13aWR0aD0iMS4zMjY4NDA4MTc4MzgwMDQyIiBkPSJNIDgxLjY3ODYgODEuOTAzNiBMIDgwLjE5OTkgNzkuMjk0NCBDIDc4LjU4MDUgNzYuNDc0MiA3Ni43MDk2IDczLjg5MjEgNzUuMDU5NyA3MS42MTkyIEMgNzIuOTM4NyA2OC42OTE2IDcxLjA5MzEgNjUuNjYyNCA3MC40ODIxIDYzLjUyMjIgQyA3MC4yNjE4IDYyLjc1MTMgNzAuMzY4IDYyLjAxNTYgNzAuNjg1MSA2MS42MDg5IEMgNzAuNzE1NiA2MS40OTk0IDcxLjAzNTQgNjEuMzI1IDcxLjI2MDkgNjEuMjc4NSBDIDczLjk3ODMgNjAuNjkxNCA4NS4yMjY2IDY3LjE0OTEgODguMDMyOSA3MC42MDA5IEMgOTIuMTQ0MSA3NS42NTYyIDkzLjc4OCA4Mi43NDc1IDkyLjg3MTIgODYuMzE5MyBDIDkyLjQ5NSA4Ny43Nzg4IDkxLjY1MzggODguODEzMSA5MC40MzU4IDg5LjMwNTQgQyA4Ny4zMjIzIDkwLjU2MzIgODUuMjc0NCA4OC4yOTMgODEuNjc4NiA4MS45MDM2IEwgODEuNjc4NiA4MS45MDM2IEwgODEuNjc4NiA4MS45MDM2IFogIi8+CiAgICA8cGF0aCBpZD0iQm9keSIgZmlsbD0iI0ZGQzkzRSIgc3Ryb2tlPSIjNjAzODEzIiBzdHJva2Utd2lkdGg9IjEuMzI2ODQwODE3ODM4MDA0MiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNIDM3LjQwMDYgMzIuMDY4OCBDIDQxLjM5MzggMjkuODk4NyAzNy4yNzI2IDIxLjcyOCAzMy4yODU0IDEzLjgyNDEgQyAzMS4xMDYxIDkuNTAyNSAyNy4yMTk4IDIuMjAzNiAyOC40ODI5IDEuNTE5NiBDIDMwLjkyNjMgMC4xOTU0IDQyLjU5OTIgMTMuOTcwNyA0Ny4zMzE0IDE5LjUyMjggTCA1Mi4xNTUxIDI1LjAxNzMgQyA1Mi4xNTUxIDI1LjAxNzMgNTUuNjAzNiAyOS4yNDc5IDU4LjI0MjYgMzIuMDM4MyBDIDU4LjI4OTEgMzIuMDg2NyA2MC43ODQyIDMxLjY5OTMgNjIuNTA3OCAzMC4yNjY5IEMgNjMuOTEyOSAyOS4wOTQ3IDYzLjcyNzEgMjcuNzgzMSA2NC4xNzQzIDI1LjAyNDYgQyA2NC41ODQ5IDIyLjQ5MDMgNjUuMDMwOCAxNy45MDQxIDY2LjM5MDggMTcuODgwOSBDIDY4LjQzOTQgMTcuODQ5NyA2OS43ODYyIDI2LjI5MzcgNzAuMzEwOSAyOS40MjE3IEwgNzAuNjAwOCAzMS4wOTQ5IEMgNzEuMjg4OCAzNC44MTUzIDc0Ljg3NzkgNDYuMDAxMyA3NS4wMzE4IDQ2LjQ3NTYgQyA3NS4wODA5IDQ2LjU5MSA3NS4xNjE5IDQ2Ljc0MSA3NS4xNjE5IDQ2Ljc0MSBMIDc1LjE5MTcgNDYuODAxNCBMIDc1LjIzMjggNDYuODUxOCBDIDgwLjc3NTEgNTMuNzI1NSA4NC44OTY5IDYyLjA2IDg0Ljg5NjkgNjkuODY4NSBDIDg0Ljg5NjkgODYuNDAzNiA3MC40MDI1IDk4LjA0MzMgNTEuMDAxNCA5OC4wNDMzIEMgNDcuNDAzIDk4LjA0MzMgNDMuODgzNiA5Ny41MzkxIDQwLjU0MDYgOTYuNTQ3OSBMIDQwLjM2MDggOTYuNDk2MiBDIDQwLjM2MDggOTYuNDk2MiAzNS4xMTMyIDk2LjA1NSAyOC40IDEwNC44NzkyIEMgMjcuMDUzMyAxMDYuNjUwNSAyNy4xNzMzIDEwOC4zMDE4IDI1LjI3NTMgMTA3Ljc5MzYgQyAyNC42NDI0IDEwNy42MjQ0IDI0LjE3NzMgMTA3LjE1OTMgMjMuNzk3OSAxMDYuMzE0OCBDIDIyLjg5MDMgMTA0LjMwMDcgMjMuNTYwMyA5OS41Mjg3IDI0LjY2OTYgOTYuNDc5NiBMIDI0Ljg0NDEgOTYuMDAwNiBMIDI0LjQ0MzQgOTUuNjgzNSBDIDI0LjM0NTIgOTUuNjA1MiAxMy40NTcxIDg3LjY3MTQgMTIuMzU3MiA3Ni4zMDIzIEMgMTEuMzk4NSA2Ni4zOTIyIDE2LjQwNDcgNjAuNzQ5OCAxOC40ODE5IDU3LjY0ODkgTCAxOS42NzU0IDU1LjY2MTMgQyAyMS4xODIgNTEuOTk1OSAxOC4zNDY1IDQ2Ljg5ODIgMTUuODQ0MSA0Mi40MDAyIEMgMTQuMzUwMSAzOS43MTQ3IDExLjkzODUgMzUuNzk1OSAxMi40ODMyIDM0Ljg3NSBDIDEzLjA4NzYgMzMuODU0NyAxNS4yNDc3IDM0Ljk0MDcgMTcuNDI5IDM1Ljk4MSBDIDE5LjE5NzcgMzYuODI2MiAyMC44OTk0IDM4LjAyMDMgMjIuMDgwOSAzNy4yMzI4IEMgMjMuMzA5NiAzNi40MTQ4IDIyLjUwMzUgMzQuMzYwMiAyMS4zODcgMzEuNTE2MSBDIDIwLjMzNjggMjguODQ1MiAxOC4zNDg1IDI0LjYyNTkgMTkuMTEyMSAyMi44ODQ0IEMgMTkuMzIyNCAyMi40MDU0IDE5LjY5MTMgMjIuMDY5IDIwLjIzOTkgMjEuODU2MSBDIDIyLjI2ODcgMjEuMDcwNiAyNS4xNjkxIDI0LjQ4NzkgMjcuNTE3IDI3LjE2MDggQyAzMC4zODEgMzAuNDI0MiAzMy42MjkxIDM0LjEyMjEgMzcuNDAwNiAzMi4wNjg4IEwgMzcuNDAwNiAzMi4wNjg4IEwgMzcuNDAwNiAzMi4wNjg4IFogIi8+CiAgICA8ZyBpZD0iTF9FeWUiPgogICAgICA8cGF0aCBpZD0iV2hpdGVfMV8iIGZpbGw9IiNGRkZGRkYiIGQ9Ik0gNDAuNzQ4OSA3MS4wNzkyIEMgNDAuNzQ4OSA3NC4wNjEzIDQzLjE2ODQgNzYuNDc5NSA0Ni4xNTI1IDc2LjQ3OTUgQyA0OS4xMzY1IDc2LjQ3OTUgNTEuNTU0NyA3NC4wNjEzIDUxLjU1NDcgNzEuMDc5MiBDIDUxLjU1NDcgNjguMDk1MiA0OS4xMzU5IDY1LjY3MzcgNDYuMTUyNSA2NS42NzM3IEMgNDMuMTY3NyA2NS42NzUgNDAuNzQ4OSA2OC4wOTUyIDQwLjc0ODkgNzEuMDc5MiBMIDQwLjc0ODkgNzEuMDc5MiBMIDQwLjc0ODkgNzEuMDc5MiBaICIgc3Ryb2tlLXdpZHRoPSIwLjY2MzQyMDQwODkxOTAwMjEiLz4KICAgICAgPHBhdGggaWQ9IlB1cGlsXzFfIiBmaWxsPSIjNjAzODEzIiBkPSJNIDQ2Ljg3OTYgNjcuMTMwNSBDIDQ3LjkyODQgNjcuMTMwNSA0OC44NzkxIDY3LjU1NjUgNDkuNTY3MSA2OC4yNDUxIEMgNTAuMjU1NyA2OC45MzMxIDUwLjY4MTYgNjkuODgzNyA1MC42ODE2IDcwLjkzMjYgQyA1MC42ODE2IDcxLjk4MTUgNTAuMjU1NyA3Mi45MzIyIDQ5LjU2NzEgNzMuNjIwMSBDIDQ4Ljg3OTEgNzQuMzA4OCA0Ny45Mjg0IDc0LjczNDcgNDYuODc5NiA3NC43MzQ3IEMgNDUuODMwNyA3NC43MzQ3IDQ0Ljg4IDc0LjMwODggNDQuMTkyMSA3My42MjAxIEMgNDMuNTAzNCA3Mi45MzIyIDQzLjA3NzUgNzEuOTgxNSA0My4wNzc1IDcwLjkzMjYgQyA0My4wNzc1IDY5Ljg4MzcgNDMuNTAzNCA2OC45MzMxIDQ0LjE5MjEgNjguMjQ1MSBDIDQ0Ljg4IDY3LjU1NjUgNDUuODMwNyA2Ny4xMzA1IDQ2Ljg3OTYgNjcuMTMwNSBMIDQ2Ljg3OTYgNjcuMTMwNSBaICIgc3Ryb2tlLXdpZHRoPSIwLjY2MzQyMDQwODkxOTAwMjEiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJSX0V5ZSI+CiAgICAgIDxwYXRoIGlkPSJXaGl0ZSIgZmlsbD0iI0ZGRkZGRiIgZD0iTSA2Ni43NzYyIDcxLjA3OTIgQyA2Ni43NzYyIDc0LjA2MTMgNjkuMTk1IDc2LjQ3OTUgNzIuMTgwNCA3Ni40Nzk1IEMgNzUuMTYyNSA3Ni40Nzk1IDc3LjU4MjcgNzQuMDYxMyA3Ny41ODI3IDcxLjA3OTIgQyA3Ny41ODI3IDY4LjA5NTIgNzUuMTYzOCA2NS42NzM3IDcyLjE4MDQgNjUuNjczNyBDIDY5LjE5NSA2NS42NzUgNjYuNzc2MiA2OC4wOTUyIDY2Ljc3NjIgNzEuMDc5MiBMIDY2Ljc3NjIgNzEuMDc5MiBMIDY2Ljc3NjIgNzEuMDc5MiBaICIgc3Ryb2tlLXdpZHRoPSIwLjY2MzQyMDQwODkxOTAwMjEiLz4KICAgICAgPHBhdGggaWQ9IlB1cGlsIiBmaWxsPSIjNjAzODEzIiBkPSJNIDY5LjEwNDIgNzAuOTMyNiBDIDY5LjEwNDIgNzMuMDMyMyA3MC44MDUyIDc0LjczMzMgNzIuOTA1NiA3NC43MzMzIEMgNzUuMDA0NiA3NC43MzMzIDc2LjcwNzYgNzMuMDMzNyA3Ni43MDc2IDcwLjkzMjYgQyA3Ni43MDc2IDY4LjgzNDIgNzUuMDA0NiA2Ny4xMzA1IDcyLjkwNTYgNjcuMTMwNSBDIDcwLjgwNTIgNjcuMTMwNSA2OS4xMDQyIDY4LjgzMzUgNjkuMTA0MiA3MC45MzI2IEwgNjkuMTA0MiA3MC45MzI2IEwgNjkuMTA0MiA3MC45MzI2IFogIiBzdHJva2Utd2lkdGg9IjAuNjYzNDIwNDA4OTE5MDAyMSIvPgogICAgPC9nPgogICAgPHBhdGggaWQ9IkxfQXJtIiBmaWxsPSIjRkZDOTNFIiBzdHJva2U9IiM2MDM4MTMiIHN0cm9rZS13aWR0aD0iMS4zMjY4NDA4MTc4MzgwMDQyIiBkPSJNIDMuNDQzNSA5MS45MzY1IEMgMi4zMzYyIDkxLjIyOTMgMS42OTggOTAuMDYxNyAxLjU5NTIgODguNTU1NyBDIDEuMzQ1MSA4NC44NzMxIDQuMjU5NSA3OC4yMDM3IDkuMjIzOCA3My45ODU3IEMgMTIuNjEzOSA3MS4xMDUxIDI0Ljg1NCA2Ni44MTQxIDI3LjQxNzUgNjcuODg2OCBDIDI3LjYyOTEgNjcuOTc1NyAyNy45MTMgNjguMjA0IDI3LjkyMTcgNjguMzE5NCBDIDI4LjE2MTIgNjguNzc1OCAyOC4xMjkzIDY5LjUxNjkgMjcuNzcxNyA3MC4yMzQ3IEMgMjYuNzgwNiA3Mi4yMjc2IDI0LjQxMjIgNzQuODcgMjEuNzkwMyA3Ny4zNTcyIEMgMTkuNzUyMyA3OS4yOTcgMTcuNDQyOSA4MS40ODc2IDE1LjMzNjYgODMuOTY2OCBMIDEzLjQwNDcgODYuMjU1NiBDIDguNzAzIDkxLjg4MjggNi4yNzE2IDkzLjc0NDMgMy40NDM1IDkxLjkzNjUgTCAzLjQ0MzUgOTEuOTM2NSBMIDMuNDQzNSA5MS45MzY1IFogIi8+CiAgICA8cGF0aCBpZD0iTW91dGgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzYwMzgxMyIgc3Ryb2tlLXdpZHRoPSIxLjMyNjg0MDgxNzgzODAwNDIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTSA2NC4xODg5IDg4LjA4MzQgQyA2NC4xODg5IDg4LjA4MzQgNTkuMjcwOSA4OC4wODczIDU1LjgyNzEgODUuMTM1OCAiLz4KICA8L2c+Cjwvc3ZnPg=='
class dakadawebextension{
  constructor(){
	  //用来凑数的
  }
	messageprocess(event){
		getmessage=event.data;
		if(getmessage=="loaded!"){
			new_Window.postMessage({html:HTML,Script:script},"*");
			getmessage='';
		}
	} 
	error500(){
		return '<h1>503</h1><p>Maybe there are some errors </p>';
	}
	error404(){
		return '<h1>404</h1><p>page not found</p>';
	}
    getInfo(){
        return{
            id:"dakadawebextension1",
            name:'dakadaweb',
            menuIconURI:image,
            blockIconURI: image,
	    color1: '#FFC93E',
            color2: '#FFC93E',
            blocks:[
                {
                    opcode:"startserver",
                    blockType:Scratch.BlockType.REPORTER,
                    text:"开启服务器[webobject][page]",
		    arguments: {
			    webobject:{
				    type:Scratch.ArgumentType.STRING,
				    defaultValue:'class web{//something}'
			    },
			    page:{
				    type:Scratch.ArgumentType.STRING,
				    defaultValue:'webname@page'
			    }
		    },
		},
               
 	                {
                    opcode:"postmessager",
                    blockType:Scratch.BlockType.REPORTER,
                    text:"前端发送的消息",
		    arguments: {}
		},	  
            ]
        }
    }

  startserver(args,util){
	try{
		let temp=new Function(args.webobject);
		let webobject=new (new temp()).webObject();
		route=webobject.Info();
		let pageparam;
		let name=args.page.split("@")[0]
		pageparam=new URLSearchParams('?page='+args.page.split("@")[1])
		if(!args.page.split("@")[1]){
			pageparam=new URLSearchParams('?page=index')
		}
		let page=pageparam.get('page')
		if(route.hasOwnProperty(page)){
			try{
				HTML=route[page]['HTML']()
				script=route[page]['script'].toString()
			}catch(e){
				console.err(`[Dakada]caught an error!${e}`)
				if(route.hasOwnProperty('error500')){
					try{
						HTML=route['error500']()
					}catch(e){
						HTML=this.error500()
					}
				}else{
					HTML=this.error500()
				}
			}
		}else{
			if(route.hasOwnProperty('error404')){
				try{
					HTML=route['error404']()
				}catch(e){
					HTML=this.error500()
				}
			}else{
				HTML=this.error404()
			}
		}
		
	  	new_Window=window.open('https://dakada.pythonanywhere.com/webstage','dakada','popup=yes')
	  	window.onmessage=this.messageprocess
		return `successfully open the project ${name}`
	}catch(e){
		console.log(e)
		return `[Dakada]There is an error,see console for more information`
	}
  }
  message(args,util){
	  let message=args.message;
	  try{
	 	new_Window.postMessage(message,"*");
		  if(new_Window.closed){
			  throw new Error("can_not_get")
		  }
	  }catch(e){
		  console.error("[Dakadaerr]服务器未开启或已关闭！")
	  }

  }
postmessager(){return getmessage}
}
    Scratch.extensions.register(new dakadawebextension());
})(Scratch);
