<template>
  <v-container max-width="900" class="py-16 text-center">

    <h1 class="hero-title mb-6" style="color: rgb(var(--v-theme-secondary));">
      {{ title }}
    </h1>

    <p class="hero-subtitle text-medium-emphasis mb-16 mx-auto" style="max-width: 640px;">
      {{ description }}
    </p>

    <!-- Media Gallery -->
    <div class="d-flex flex-column" style="gap: 32px;">
      <div v-for="item in media" :key="item.id" class="media-item">

        <!-- Image -->
        <v-img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="item.caption"
          class="media-frame"
          cover
        />

        <!-- Local video file -->
        <video
          v-else-if="item.type === 'video'"
          :src="item.src"
          :poster="item.poster"
          class="media-frame"
          controls
          preload="metadata"
          playsinline
        />

        <!-- Embedded video (YouTube, Vimeo, etc.) -->
        <div v-else-if="item.type === 'embed'" class="embed-wrapper media-frame">
          <iframe
            :src="item.src"
            :title="item.caption"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>

        <p v-if="item.caption" class="media-caption text-medium-emphasis mt-3">
          {{ item.caption }}
        </p>
      </div>
    </div>

  </v-container>
</template>

<script setup>
const base = import.meta.env.BASE_URL

// ── Page content ──────────────────────────────────────────────────────────────
const title = 'Your Project Title'
const description =
  'A short description of the project goes here. Two or three sentences work well.'

// ── Media ─────────────────────────────────────────────────────────────────────
// type: 'image' | 'video' | 'embed'
// Files go in public/images/ and public/videos/
// For 'embed', use the embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID)
const media = [
  {
    id: 1,
    type: 'image',
    src: `${base}images/photo1.jpeg`,
    caption: 'Caption for the first image',
  },
  {
    id: 2,
    type: 'video',
    src: `${base}videos/demo.mp4`,
    poster: `${base}images/demo-poster.jpeg`, // optional thumbnail
    caption: 'A locally hosted video',
  },
  {
    id: 3,
    type: 'embed',
    src: 'https://www.youtube.com/embed/VIDEO_ID',
    caption: 'A YouTube video',
  },
]
</script>

<style scoped>
.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
}

.hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.7;
}

.media-frame {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: block;
}

.embed-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
}

.embed-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.media-caption {
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>