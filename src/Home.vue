<template>
  <v-container max-width="1200" class="py-16 text-center d-flex flex-column justify-center" style="min-height: 100vh;">

    <h1 class="hero-title mb-6" style="color: rgb(var(--v-theme-secondary));">
      {{ title }}
    </h1>

    <p class="hero-subtitle text-medium-emphasis mb-4 mx-auto">
      {{ description }}
    </p>

    <p class="index-terms text-medium-emphasis font-italic mb-16 mx-auto">
      {{ indexTerms }}
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
const title = 'Receding-Horizon Next-Best-View Planner for Autonomous Leaf Surface Reconstruction'
const description =
  ' Arif Ahmed, Sajal K. Das, and Parikshit Maini' + 
  '\n\n' +
  ' Abstract— Accurate plant leaf modeling is fundamental to' +
  ' downstream tasks such as plant growth monitoring, and phenotyping for yield estimation.' +
  ' Autonomous robotic reconstruction for large-scale field deployment must address limitations' +
  ' on robot planning budget and computation resources while' +
  ' optimizing viewpoint utility for leaf surface reconstruction.' +
  ' Existing approaches either focus on rigid objects, point-cloud' +
  ' coverage or plant reconstruction without fully addressing the' +
  ' system limitations or exploiting task-driven point cloud utility.' +
  ' In this work, we study next-best-view (NBV) planning for leaf' +
  ' surface reconstruction under travel constraints. We develop a' +
  ' novel Centroid-based Information Gain (CIG) function that' +
  ' measures the spatial distribution of observed points relative to' +
  ' the centroid of the existing point cloud to compute viewpoint' +
  ' utility. We also develop a receding-horizon variant that reasons' +
  ' over future viewpoints. To benchmark our work, we use the' +
  ' LAST-STRAW [1] public dataset that includes point clouds of' +
  ' strawberry plants over different growth stages and compare our' +
  ' method with attention-driven NBV [2] that uses a visibility-based' +
  ' information gain approach. The proposed receding-horizon approach consistently reduces surface reconstruction' +
  ' error and improves geometric fidelity across multiple growth' +
  ' stages, especially under increased inter-leaf occlusion. Results' +
  ' demonstrate that our approach is able to visit viewpoints that' +
  ' reduce surface reconstruction error and improves reconstruction' +
  ' accuracy as compared to the baseline by up to 10%.'

const indexTerms =
  'Index Terms— plant leaf reconstruction, view planning, next' +
  ' best view, leaf surface reconstruction, receding-horizon'

// ── Media ─────────────────────────────────────────────────────────────────────
// type: 'image' | 'video' | 'embed'
// Files go in public/images/ and public/videos/
// For 'embed', use the embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID)


const media = [
/*  
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
  */
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
  white-space: pre-line;
  line-height: 1.7;
  max-width: 1000px;   /* was 640px, this controls how wide the text can go */
}

.index-terms {
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 1000px;
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