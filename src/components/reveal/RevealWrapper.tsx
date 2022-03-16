import React, { ReactNode, useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";
import SpeakerNotes from "reveal.js/plugin/notes/notes.esm";
import "./stylings.css";

interface RevealWrapperProps {
    children: ReactNode;
}

/**
 * Main component for creating the reveal.js slideshow.
 *
 * Initalizes the Slideshow with the necessary plugins and containers.
 */
const RevealWrapper: React.FC<RevealWrapperProps> = (props: RevealWrapperProps) => {
    useEffect(() => {
        const deck = new Reveal({
            plugins: [RevealHighlight, SpeakerNotes],
            slideNumber: true,
        });
        deck.initialize();
    }, []);

    return (
        <div className="reveal">
            <div className="slides">{props.children}</div>
        </div>
    );
};

export default RevealWrapper;
