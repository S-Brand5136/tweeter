/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  // POST: tweet submission to /tweets
  $('form').on('submit', function (event) {
    event.preventDefault();
    const $textarea = $(this).children('textarea');

    if ($textarea.val().length > 140) {
      $('#error-message').text('Error. Your tweet is too long!');
      return $('#error-message').slideDown('slow');
    }

    if ($textarea.val().length === 0) {
      $('#error-message').text('Error. Your tweet is too short! please add some tweet!');
      return $('#error-message').slideDown('slow');
    }

    if (!$('#error-message').is(':hidden')) {
      $('#error-message').slideUp();
    }

    const $serializedData = $(this).serialize();
    $textarea.val('');

    $.ajax({ url: '/tweets', method: 'POST', data: $serializedData })
      .then(() => {
        loadTweets();
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // GET: tweets from database
  const loadTweets = () => {
    $.ajax({ method: 'GET', url: '/tweets', dataType: 'json' })
      .then((data) => {
        if ($('#tweet-container').children().length === 0) {
          return renderTweets(data);
        }

        renderTweets([data.pop()]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Create and add database tweets to tweet-container
  const renderTweets = (tweets) => {
    return tweets.forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      $tweet.prependTo($('#tweet-container'));
    });
  };

  const createTweetElement = (tweet) => {
    const { user, content, created_at } = tweet;
    const $tweet = $(`
    <article class="tweet">
      <header>
        <div>
          <img id="profile-img" src="${user.avatars}" alt="profile picture">
          <span class="username">${user.name}</span>
        </div>
        <span class="tweeter-handle">${user.handle}</span>
      </header>
      <section>
        <p>${escape(content.text)}</p>
      </section>
      <footer>
        <span class="tweet-time">${timeago.format(created_at)}</span>
        <div>
          <button class="btn-icon"><i class="fas fa-flag"></i></button>
          <button class="btn-icon"><i class="fas fa-retweet"></i></button>
          <button class="btn-icon"><i class="fas fa-heart"></i></button>
        </div>
      </footer>
    </article> `);

    return $tweet;
  };

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  loadTweets();
});
