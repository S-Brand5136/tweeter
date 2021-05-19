/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {
  const data = [
    {
      user: {
        name: 'Newton',
        avatars: 'https://i.imgur.com/73hZDYK.png',
        handle: '@SirIsaac',
      },
      content: {
        text: 'If I have seen further it is by standing on the shoulders of giants',
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: 'Descartes',
        avatars: 'https://i.imgur.com/nlhLi3I.png',
        handle: '@rd',
      },
      content: {
        text: 'Je pense , donc je suis',
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = (tweets) => {
    return tweets.forEach((tweet) => {
      const $tweet = createTweetElement(tweet);
      $('#tweet-container').append($tweet);
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
      <p>${content.text}</p>
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

  renderTweets(data);
});
