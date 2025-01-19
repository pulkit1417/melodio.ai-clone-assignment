const MusicBox = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-8 md:pt-16">
      <div className="w-full max-w-lg md:max-w-2xl -mt-48">
        <div className="bg-transparent bg-[linear-gradient(90deg,rgba(113,141,255,0.2)_0%,rgba(197,146,255,0.2)_100%),linear-gradient(140deg,rgba(39,39,39,0.4)_14%,rgba(30,30,30,0.4)_98%)] p-4 sm:p-6 md:p-8 rounded-3xl text-white space-y-4 sm:space-y-6">
          {/* Header Text Section */}
          <div className="space-y-4 sm:space-y-5 text-center">
            <div className="space-y-0.5">
              <p className="text-sm sm:text-base text-gray-100">Hey there, music lover, have you heard the news?</p>
              <p className="text-sm sm:text-base text-gray-100">Melodio&apos;s here with tunes that&apos;ll light your fuse.</p>
              <p className="text-sm sm:text-base text-gray-100">With AI magic, we create your sound,</p>
              <p className="text-sm sm:text-base text-gray-100">Unlimited music, wherever you&apos;re bound.</p>
            </div>

            <div className="space-y-0.5 text-gray-200">
              <p className="text-sm sm:text-base">Oh, Melodio, we&apos;re here to redefine,</p>
              <p className="text-sm sm:text-base">Your music world, every beat, every rhyme.</p>
              <p className="text-sm sm:text-base">From gaming to workouts, or chillin&apos; out at night,</p>
              <p className="text-sm sm:text-base">We got your tracks, everything feels just right.</p>
            </div>
          </div>

          {/* Music Player */}
          <div className="flex items-center gap-3 px-1">
            <button className="rounded-full bg-slate-800">
              <img className="w-7 h-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHwSURBVHic7dnhcdpAEAXgt5kUQAlKB3YFUTogHaQEqMC4ArsD3AHpQHYFlCB1YDp4/qHzRGGM7oRH3J553+9jWL3Z054kQERERERERERERERERERERESmIVmT3JGsctdSNJIVyS3/eSW5zF1XcUgujoI89kBykbvOYoQtHtOSrHPXOsW33AVEVAAakqvchbiX2KFDTQkDy3uHDtUA9urWE87o0KEdnQ4sjx3aAThE1izRd2s9ezUTeQ30FsBzZF2FfmDpeAWMbvlmsGbF/qAfsy9hYM0qJdCw7iYEFvPKax5YqYGGtQv2WztFc5XdOiXQo9+0id2a5X2Ax6F0kpk9ox9YfyNLFwB2JDdz13SsqEABwMwOZvYbwBrx49XPC5T0n+ICfWdmj0g7Xl1UsYEOVLkLGCo2UJJ/AOyhQD+H4Q0/gC364TPm5QIl+TDzsakNHXw9pgZKcpMQJJn5Q9/3XH+cKoTTIO1eeW9mmznriXEdaDiY3yUs7QD8MrNuznpcG9vy7AdPk7jFN7mvxYWRQFumD54693W4MRJoii2dvlFyfQ/9wAHA2syechdySkmBdihg8JTypHRvZj+8hwn479AOBXSlC4wfjfQ18xxh2g+DbXltz+FzCME+eD0OiYiIiIiIiIiIiIiIiIiIiHw5b6EF+KClyGlKAAAAAElFTkSuQmCC" alt="P" />
            </button>
            <div className="flex-grow">
              <div className="h-0.5 bg-slate-700/50 rounded-full">
                <div className="w-0 h-full bg-gray-400 rounded-full"></div>
              </div>
            </div>
            <div className="w-5 sm:w-6 h-5 sm:h-6">
              <img src="data:image/png;base64,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" alt="M" />
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-sm sm:text-base font-medium text-gray-100">Describe the melody you need for your moment</h2>
            <div className="relative">
              <textarea 
                className="w-full h-24 sm:h-28 bg-slate-800/50 rounded-xl p-3 sm:p-4 text-xs sm:text-sm resize-none text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-400/50"
                placeholder="Feeling intrigued while exploring a new city"
              />
              <div className="absolute bottom-4 sm:bottom-5 left-3 sm:left-4 text-gray-400 text-xs">
                0/500
              </div>
              <button className="absolute bottom-4 sm:bottom-5 right-3 sm:right-4 bg-lime-400 hover:bg-lime-500 text-black px-4 sm:px-5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALdSURBVHic7ZvrkdowFEbPpAI6iNIB6cAdJB2EDpYSvlSw6cCTCrYEpwNKIB2QDjY/hAfb64fkhyRAZ8azDLavvj2DLXEByGQymUwmk8lsTQGcgOr6uMvhuu8MfA8VKiXegPfGdgFeAWGlNPe9xYkYlyNtCWOb4kSMi8FNzgXYxYkYn5JpQWW0dD18Cjzeb4dj/mwdwofQgj47HPO0lxfYaXzqEjtFSxeZAvdZrIiSsIeQl9g3j2N/bJbCk5CCmveWv8Av4CvwBfgJ/Bs4ds44xcIaUdgBL9i3FGP7hV0zzUG011PHmXUeEpFX5YOI9iunuv7NkmjLOXO7PA3tN8EKniwBRL+cGsMTSxLjcmoMTyhJuMmpMbRv3He3BPBB+MmpOTXO228RLAXEPDl72rPcQ76CxHw5zSk/2OLxiG1uFZ3nC2695rUQ68hZM9PkwM2bXoWV1W2+r/HphLgzOeDeX156MxR3KKdmqvlVLawv7lgO2MtnTNDLgtrizuXAtKC5TS916hjH85KSA3amGhNUzqipTo2L43nJydnRDjS0GY+aGqihifOSkwPuDXjXaV4TdTRwXpJyaipsuJJ2D0bX58+4LemFm2x1zktazloINzldCVmOx6awscMgspxBRJYziAgn54jbV/5OzP8cblVE2FdOs4P4jpUh7AL33NlXLvrPVkCEv6xKj7pL3jcuRj2BQtxzjGPdqC1YTYTb+oZcbVh7MZoItrUcsB2FqfrFgvqzkUOwreW45igWjrFJqBBywK3jUK4wjjNyCBRKTuExnllhvEnkESjETbP704ex7XWlMQeRR5gQcqA9g52xK+f9dRMBuwEiPTlw600dBvY3v/K32TpIpCknCUSWM4jIcgbx+d3X08mBj62CLKeDy+r0aeWAX5/l6eTAx2+NZjk9GPwkKUbI2BjcJClOvDQwjEtSrGApYeiXpHiR0mOHnd0u2I9bDlHTZDKZzIPwH8RcWk2GdaeiAAAAAElFTkSuQmCC" alt="Send" className="w-3 sm:w-4 h-3 sm:h-4" />
                Let&apos;s vibe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bottom-8 left-0 right-0 flex flex-col items-center gap-4 mt-2">
        <p className="text-red-400 text-xs">* This is the demo version of Melodio AI.</p>
        <button className="px-6 py-2 rounded-full border border-white/20 text-white/70 hover:bg-white/10 transition-colors text-sm">
          Feedback
        </button>
      </div>
    </div>
  );
};

export default MusicBox;