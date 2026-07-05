/* ==========================================
   CUSTOM RESPONSIVE VIDEO PLAYER LOGIC
   Shivam Health & Beauty Care Custom Player
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeCustomPlayers();
});

function initializeCustomPlayers() {
    const players = document.querySelectorAll(".custom-player-wrapper");

    players.forEach(player => {
        const video = player.querySelector(".custom-video");
        const overlay = player.querySelector(".player-overlay");
        const playBtnHuge = player.querySelector(".play-btn-huge");
        const playToggleBtn = player.querySelector(".play-toggle-btn");
        const progressCurrent = player.querySelector(".player-progress-current");
        const progressBar = player.querySelector(".player-progress-bar");
        const timeDisplay = player.querySelector(".player-time-display");
        const volumeToggleBtn = player.querySelector(".volume-toggle-btn");
        const volumeSlider = player.querySelector(".player-volume-slider");
        const fullscreenBtn = player.querySelector(".fullscreen-btn");
        const controls = player.querySelector(".custom-player-controls");

        if (!video) return;

        // Play/Pause Function
        function togglePlay() {
            if (video.paused) {
                video.play();
                if (overlay) overlay.classList.add("playing");
                updatePlayIcons(true);
            } else {
                video.pause();
                if (overlay) overlay.classList.remove("playing");
                updatePlayIcons(false);
            }
        }

        function updatePlayIcons(isPlaying) {
            if (playToggleBtn) {
                if (isPlaying) {
                    playToggleBtn.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>`;
                } else {
                    playToggleBtn.innerHTML = `
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>`;
                }
            }
            if (playBtnHuge) {
                playBtnHuge.innerHTML = isPlaying ? `
                    <svg style="width:30px;height:30px;fill:currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ` : `
                    <svg style="width:30px;height:30px;fill:currentColor;margin-left:4px" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                `;
            }
        }

        // Attach play trigger
        if (overlay) {
            overlay.addEventListener("click", togglePlay);
        }
        if (video) {
            video.addEventListener("click", togglePlay);
        }
        if (playToggleBtn) {
            playToggleBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                togglePlay();
            });
        }

        // Update progress and duration
        video.addEventListener("timeupdate", () => {
            if (video.duration) {
                const percentage = (video.currentTime / video.duration) * 100;
                if (progressCurrent) progressCurrent.style.width = `${percentage}%`;
                
                if (timeDisplay) {
                    timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
                }
            }
        });

        // Seek function
        if (progressBar) {
            progressBar.addEventListener("click", (e) => {
                e.stopPropagation();
                const rect = progressBar.getBoundingClientRect();
                const clickPosition = (e.clientX - rect.left) / rect.width;
                video.currentTime = clickPosition * video.duration;
            });
        }

        // Format duration helper
        function formatTime(seconds) {
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m}:${s < 10 ? '0' : ''}${s}`;
        }

        // Volume logic
        let previousVolume = 1;
        if (volumeSlider) {
            volumeSlider.addEventListener("input", (e) => {
                e.stopPropagation();
                video.volume = e.target.value;
                video.muted = (video.volume === 0);
                updateVolumeIcon(video.volume, video.muted);
            });
        }

        if (volumeToggleBtn) {
            volumeToggleBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (video.muted || video.volume === 0) {
                    video.muted = false;
                    video.volume = previousVolume || 1;
                    if (volumeSlider) volumeSlider.value = video.volume;
                } else {
                    previousVolume = video.volume;
                    video.muted = true;
                    video.volume = 0;
                    if (volumeSlider) volumeSlider.value = 0;
                }
                updateVolumeIcon(video.volume, video.muted);
            });
        }

        function updateVolumeIcon(volume, isMuted) {
            if (!volumeToggleBtn) return;
            if (isMuted || volume === 0) {
                volumeToggleBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.03c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>`;
            } else if (volume < 0.5) {
                volumeToggleBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>
                    </svg>`;
            } else {
                volumeToggleBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M3 9v6h4l5 5V4L9 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>`;
            }
        }

        // Fullscreen Logic
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (!document.fullscreenElement) {
                    if (player.requestFullscreen) {
                        player.requestFullscreen();
                    } else if (player.webkitRequestFullscreen) { /* Safari */
                        player.webkitRequestFullscreen();
                    } else if (player.msRequestFullscreen) { /* IE11 */
                        player.msRequestFullscreen();
                    }
                } else {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
            });
        }

        // Keep controls visible briefly when hovering controls
        if (controls) {
            controls.addEventListener("mouseenter", () => {
                controls.classList.add("hovered");
            });
            controls.addEventListener("mouseleave", () => {
                controls.classList.remove("hovered");
            });
        }
    });
}
