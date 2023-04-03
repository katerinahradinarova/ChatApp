import React from 'react';
import imgEchoBot from '../../images/echobot.jpg';
import imgReverseBot from '../../images/reversebot.png';
import imgSpamBot from '../../images/spambot.jpg';
import imgIgnoreBot from '../../images/ignorebot.png';

const EchoBot = () => (
    <div  className="block-users__user">
        <div className="block-users__img">
            <img src={imgEchoBot} alt="img user" />
        </div>
        <div className="block-users__txt">
            <p className="block-users__txt-name">Echo bot</p>
            <p className="block-users__txt-link">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
    </div>
)

const ReverseBot = () => (
    <div className="block-users__user">
        <div className="block-users__img">
            <img src={imgReverseBot} alt="img user" />
        </div>
        <div className="block-users__txt">
            <p className="block-users__txt-name">Reverse bot</p>
            <p className="block-users__txt-link">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
    </div>
)

const IgnoreBot = () => (
    <div className="block-users__user">
        <div className="block-users__img">
            <img src={imgIgnoreBot} alt="img user" />
        </div>
        <div className="block-users__txt">
            <p className="block-users__txt-name">Ignore bot</p>
            <p className="block-users__txt-link">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
    </div>
)

const SpamBot = () => (
    <div className="block-users__user">
        <div className="block-users__img">
            <img src={imgSpamBot} alt="img user" />
        </div>
        <div className="block-users__txt">
            <p className="block-users__txt-name">Spam bot</p>
            <p className="block-users__txt-link">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
    </div>
)

const Bots = ({ data: { type } }) => {
    switch (type) {
        case 'echoBot':
            return <EchoBot />

        case 'reverseBot':
            return <ReverseBot />

        case 'spamBot':
            return <SpamBot />

        case 'ignoreBot':
            return <IgnoreBot />

        default:
            return null;
    }
}

export default function BotsContainer({ data }) {
    return (
            <Bots data={data} />
    )
}
