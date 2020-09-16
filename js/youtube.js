$(document).ready(function () {
  var key = "AIzaSyDSKkO2sXUxEKx9o6dyXJzQelIUK_N3S-g";
  var playlistId = "UUyfdWGh5VR_XT0mE7-DT1tw";
  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";
  var options = {
    part: "snippet",
    key: key,
    maxResults: 5,
    playlistId: playlistId,
  };

  loadVids();

  function loadVids() {
    $.getJSON(URL, options, function (data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    });
  }

  function mainVid(id) {
    $("#video").html(`
					<iframe width=700px height=100% src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				`);
  }

  function resultsLoop(data) {
    $.each(data.items, function (i, item) {
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var vid = item.snippet.resourceId.videoId;

      $.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          part: "statistics",
          id: vid,
          key: key,
        },
        function (data) {
          console.log(data);

          $.each(data.items, function (i, item) {
            var views = item.statistics.viewCount;
            $("main").append(`
							<article class="video-link d-flex px-3" data-key="${vid}">

								<img src="${thumb}" alt="" class="video-link-img h-100">
								<div class="video-link-info p-2 text-left ml-3 my-2">
                                    <h4 class="video-link-title m-0">${title}</h4>
                                    <p class="video-link-views m-0 mt-3">${views} views</p>
								</div>

							</article>
                        `);
          });
        }
      );
    });
  }

  // CLICK EVENT
  $("main").on("click", "article", function () {
    var id = $(this).attr("data-key");
    mainVid(id);
  });
});
