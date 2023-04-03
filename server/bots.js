class ChatBot {
  constructor(options) {
    this.username = 'Bot #' + Math.floor(Math.random() * 10000) + 1,
    this.name = options.name || 'Bot';
    this.greeting = options.greeting || `Hi, I'm ${this.name}. How can I assist you?`;
    this.responses = options.responses || {};
    this.type = options.type || 'bot';
  }

  setGreeting(greeting) {
    this.greeting = greeting;
  }

  addResponse(keyword, response) {
    this.responses[keyword.toLowerCase()] = response;
  }

  removeResponse(keyword) {
    delete this.responses[keyword.toLowerCase()];
  }

  respondToMessage(message) {
    const lowercaseMessage = message.toLowerCase();
    const keywords = Object.keys(this.responses);
    for (let i = 0; i < keywords.length; i++) {
      if (lowercaseMessage.includes(keywords[i])) {
        return this.responses[keywords[i]];
      }
    }
    return "I'm sorry, I don't understand.";
  }

  greet() {
    return this.greeting;
  }
}

class EchoBot extends ChatBot {
  constructor(name) {
    super({ name: name, type: 'echoBot' });
  }

  respondToMessage(message) {
    return message;
  }
}

class ReverseBot extends ChatBot {
  constructor(name) {
    super({  name: name, type: 'reverseBot' });
  }

  async respondToMessage(message) {
    const reversed = message.split('').reverse().join('');
    const delay = 3000;
    await new Promise(resolve => setTimeout(resolve, delay));
    return reversed;
  }
}

class IgnoreBot extends ChatBot {
  constructor(name) {
    super({ name: name, type: 'ignoreBot' });
  }

  respondToMessage(message) {
    return;
  }
}

class SpamBot extends ChatBot {
  constructor(name) {
    super({ name: name, type: 'spamBot' });
  }

  async respondToMessage(message) {
    const delay = Math.random(1000, 12000);

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    let n = Math.random(1, 47);

    for (let i = 0; i < n; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    await new Promise(resolve => setTimeout(resolve, delay));

    return result;
  }
}

module.exports = { EchoBot, ReverseBot, IgnoreBot, SpamBot };