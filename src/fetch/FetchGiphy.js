
export async function fetchIronmanGiphy() {
    const apiKey='tPWCIWMNTVOENv43dvHlasFR0RkV84Ip';
    const url = `https://api.giphy.com/v1/gifs/search?q=iron+man&api_key=${apiKey}&limit=9`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json.data);
      return json.data;
    } catch (e) {
      console.log(e);
    }
}

export async function fetchSearchGiphy(input) {
    const str=input.replace(/ /g,"+");
    console.log(str);
    const apiKey='tPWCIWMNTVOENv43dvHlasFR0RkV84Ip';
    const url = `https://api.giphy.com/v1/gifs/search?q=${str}&api_key=${apiKey}&limit=9`;
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log(json.data);
      return json.data;
    } catch (e) {
      console.log(e);
    }
}