import React from 'react';

function About() {
    return (
        <div
            style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '64px 24px',
            }}
        >
            <div
                style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '28px',
                    padding: '48px',
                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.04)',
                }}
            >
                {/* Header */}
                <div style={{ marginBottom: '48px' }}>
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 14px',
                            borderRadius: '999px',
                            background: '#eff6ff',
                            color: '#2563eb',
                            fontSize: '13px',
                            fontWeight: 600,
                            marginBottom: '18px',
                        }}
                    >
                        Project Overview
                    </div>

                    <h1
                        style={{
                            fontSize: '42px',
                            fontWeight: 700,
                            color: '#0f172a',
                            marginBottom: '18px',
                            letterSpacing: '-1px',
                        }}
                    >
                        About News Perspective AI
                    </h1>

                    <p
                        style={{
                            fontSize: '17px',
                            lineHeight: 1.9,
                            color: '#475569',
                            maxWidth: '900px',
                            marginBottom: '18px',
                        }}
                    >
                        News Perspective AI is an intelligent article analysis platform
                        designed to examine online news content and uncover the underlying
                        political perspective, sentiment, and key contextual information.
                        The platform can analyze either raw article text or a direct article
                        URL and generate a detailed AI-powered breakdown.
                    </p>

                    <p
                        style={{
                            fontSize: '17px',
                            lineHeight: 1.9,
                            color: '#475569',
                            maxWidth: '900px',
                            marginBottom: '18px',
                        }}
                    >
                        Unlike traditional bias detectors, this project does more than only
                        classify articles as left, center, or right leaning. It also
                        performs sentiment analysis, extracts important named entities such
                        as people and organizations, highlights the most influential
                        sections of the article, and provides a confidence score for every
                        prediction.
                    </p>

                    <p
                        style={{
                            fontSize: '17px',
                            lineHeight: 1.9,
                            color: '#475569',
                            maxWidth: '900px',
                        }}
                    >
                        The application uses modern Natural Language Processing techniques
                        and transformer-based deep learning models to provide more accurate
                        and meaningful insights into news articles and media coverage.
                    </p>
                </div>

                {/* Feature + Tech Cards */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '28px',
                        marginBottom: '48px',
                    }}
                >
                    {/* Features */}
                    <div
                        style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '22px',
                            padding: '32px',
                            background: '#fcfcfd',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '22px',
                                fontWeight: 700,
                                color: '#0f172a',
                                marginBottom: '24px',
                            }}
                        >
                            Core Features
                        </h2>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                            }}
                        >
                            {[
                                {
                                    title: 'Political Bias Detection',
                                    desc: 'Classifies articles as left-leaning, center, or right-leaning using a fine-tuned transformer model.',
                                },
                                {
                                    title: 'Sentiment Analysis',
                                    desc: 'Determines whether the article tone is positive, neutral, or negative.',
                                },
                                {
                                    title: 'Named Entity Recognition',
                                    desc: 'Extracts people, places, organizations, and other important entities from the article.',
                                },
                                {
                                    title: 'Article URL Analysis',
                                    desc: 'Allows users to paste a news article URL and automatically analyze the extracted content.',
                                },
                                {
                                    title: 'Important Phrase Highlighting',
                                    desc: 'Shows the key phrases and sentences that influenced the final prediction.',
                                },
                                {
                                    title: 'Confidence Scoring',
                                    desc: 'Displays the certainty level of the AI prediction for greater transparency.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#2563eb',
                                            marginTop: '8px',
                                        }}
                                    />

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                color: '#0f172a',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {item.title}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '14px',
                                                color: '#64748b',
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div
                        style={{
                            border: '1px solid #e2e8f0',
                            borderRadius: '22px',
                            padding: '32px',
                            background: '#fcfcfd',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '22px',
                                fontWeight: 700,
                                color: '#0f172a',
                                marginBottom: '24px',
                            }}
                        >
                            Technologies Used
                        </h2>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px',
                            }}
                        >
                            {[
                                {
                                    title: 'React + Vite',
                                    desc: 'Frontend interface for building a fast, modern, and responsive user experience.',
                                },
                                {
                                    title: 'FastAPI',
                                    desc: 'Backend framework used to build high-performance API endpoints.',
                                },
                                {
                                    title: 'RoBERTa Transformer Model',
                                    desc: 'Pretrained deep learning model fine-tuned for political bias classification.',
                                },
                                {
                                    title: 'spaCy',
                                    desc: 'Used for extracting named entities such as people, organizations, and locations.',
                                },
                                {
                                    title: 'TextBlob',
                                    desc: 'Performs sentiment analysis on the analyzed article text.',
                                },
                                {
                                    title: 'Trafilatura',
                                    desc: 'Extracts readable article content from web URLs for automatic analysis.',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        gap: '14px',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <div
                                        style={{
                                            minWidth: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            background: '#7c3aed',
                                            marginTop: '8px',
                                        }}
                                    />

                                    <div>
                                        <div
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                color: '#0f172a',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {item.title}
                                        </div>

                                        <div
                                            style={{
                                                fontSize: '14px',
                                                color: '#64748b',
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Creator Section */}
                <div
                    style={{
                        borderRadius: '24px',
                        padding: '36px',
                        background: 'linear-gradient(135deg, #f8fafc, #eef2ff)',
                        border: '1px solid #e2e8f0',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '40px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <div style={{ flex: 1, minWidth: '320px', maxWidth: '680px' }}>
                            <div
                                style={{
                                    fontSize: '13px',
                                    fontWeight: 700,
                                    color: '#2563eb',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '10px',
                                }}
                            >
                                Creator
                            </div>

                            <h2
                                style={{
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    color: '#0f172a',
                                    marginBottom: '14px',
                                }}
                            >
                                Made by Harshit
                            </h2>

                            <p
                                style={{
                                    fontSize: '15px',
                                    color: '#64748b',
                                    lineHeight: 1.9,
                                    marginBottom: '14px',
                                }}
                            >
                                This project was independently designed and developed as a machine
                                learning and full-stack web application project using React, FastAPI,
                                and transformer-based NLP models.
                            </p>

                            <p
                                style={{
                                    fontSize: '15px',
                                    color: '#64748b',
                                    lineHeight: 1.9,
                                }}
                            >
                                The goal of this platform is to help readers better understand the
                                hidden political perspective behind modern news articles by combining
                                bias detection, sentiment analysis, named entity recognition, and
                                important phrase extraction into a single easy-to-use interface.
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '14px',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <a
                                href="https://github.com/Harshit-0018"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    padding: '14px 22px',
                                    borderRadius: '14px',
                                    border: '1px solid #d1d5db',
                                    background: '#ffffff',
                                    color: '#0f172a',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.04)',
                                }}
                            >
                                GitHub Profile
                            </a>

                            <a
                                href="https://www.linkedin.com/in/harshitsinghnitc/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    padding: '14px 22px',
                                    borderRadius: '14px',
                                    background: '#2563eb',
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    boxShadow: '0 6px 14px rgba(37, 99, 235, 0.25)',
                                }}
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitsingh8157@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    padding: '14px 22px',
                                    borderRadius: '14px',
                                    border: '1px solid #d1d5db',
                                    background: '#ffffff',
                                    color: '#0f172a',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 10px rgba(15, 23, 42, 0.04)',
                                }}
                            >
                                Contact via Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;