import useBottomToast from "./useBottomToast";

const useQueueSong = () => {

  const [triggerToast] = useBottomToast();

  const queueSong = async (uri, token) => {

    const setting = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {

    let promise = await fetch(`https://api.spotify.com/v1/me/player/queue?uri=${uri}`, setting);

      if(promise.ok){
        triggerToast("Song added", "Song added", "success");
      } else {
        let response = await promise.json();
        throw response.error
      }

    } 
    catch (err) {
      triggerToast("An error occurred.", err.message, "error" );
    }
  };

  return [queueSong];
};

export default useQueueSong;