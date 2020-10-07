<template>
  <div style="display: flex; flex-direction: column;">
    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp0" />
      &nbsp;
      <TimeSince :timestamp="timestamp0" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp1" />
      &nbsp;
      <TimeSince :timestamp="timestamp1" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp2" />
      &nbsp;
      <TimeSince :timestamp="timestamp2" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp3" />
      &nbsp;
      <TimeSince :timestamp="timestamp3" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp4" />
      &nbsp;
      <TimeSince :timestamp="timestamp4" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp5" />
      &nbsp;
      <TimeSince :timestamp="timestamp5" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp6" />
      &nbsp;
      <TimeSince :timestamp="timestamp6" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp7" />
      &nbsp;
      <TimeSince :timestamp="timestamp7" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp8" />
      &nbsp;
      <TimeSince :timestamp="timestamp8" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp9" />
      &nbsp;
      <TimeSince :timestamp="timestamp9" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp10" />
      &nbsp;
      <TimeSince :timestamp="timestamp10" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp11" />
      &nbsp;
      <TimeSince :timestamp="timestamp11" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp12" />
      &nbsp;
      <TimeSince :timestamp="timestamp12" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp13" />
      &nbsp;
      <TimeSince :timestamp="timestamp13" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp14" />
      &nbsp;
      <TimeSince :timestamp="timestamp14" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp15" />
      &nbsp;
      <TimeSince :timestamp="timestamp15" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp16" />
      &nbsp;
      <TimeSince :timestamp="timestamp16" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp17" />
      &nbsp;
      <TimeSince :timestamp="timestamp17" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp18" />
      &nbsp;
      <TimeSince :timestamp="timestamp18" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp19" />
      &nbsp;
      <TimeSince :timestamp="timestamp19" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp20" />
      &nbsp;
      <TimeSince :timestamp="timestamp20" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp21" />
      &nbsp;
      <TimeSince :timestamp="timestamp21" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp22" />
      &nbsp;
      <TimeSince :timestamp="timestamp22" :short="true" />
    </div>

    <div style="white-space: pre-wrap;">
      <TimeSince :timestamp="timestamp23" />
      &nbsp;
      <TimeSince :timestamp="timestamp23" :short="true" />
    </div>

    <br />

    <div style="white-space: pre-wrap;">
      created_at received in comments
      <TimeSince :timestamp="1601624086.749076" />
      &nbsp;
      <TimeSince :timestamp="1601624086.749076" :short="true" />
    </div>
  </div>
</template>

<script>
import TimeSince from "./TimeSince";

export default {
  name: "TimeSinceTest",
  components: { TimeSince },
  data() {
    return {
      timestamp0: Math.floor(new Date(Date.now() / 1000 - 1)), // in seconds
      timestamp1: Math.floor(new Date(Date.now() / 1000 - 2)),
      timestamp2: Math.floor(new Date(Date.now() / 1000 - 59)),
      timestamp3: Math.floor(new Date(Date.now() / 1000 - 1.5 * 60)),
      timestamp4: Math.floor(new Date(Date.now() / 1000 - 2 * 60)),
      timestamp5: Math.floor(new Date(Date.now() / 1000 - 2 * 60 * 60)),
      timestamp6: Math.floor(new Date(Date.now() / 1000 - 23 * 60 * 60)),
      timestamp7: Math.floor(new Date(Date.now() / 1000 - 24 * 60 * 60)),
      timestamp8: Math.floor(new Date(Date.now() / 1000 - 25 * 60 * 60)),
      timestamp9: Math.floor(new Date(Date.now() / 1000 - 2 * 24 * 60 * 60)),
      timestamp10: Math.floor(new Date(Date.now() / 1000 - 6 * 24 * 60 * 60)),
      timestamp11: Math.floor(new Date(Date.now() / 1000 - 7 * 24 * 60 * 60)),
      timestamp12: Math.floor(new Date(Date.now() / 1000 - 8 * 24 * 60 * 60)),
      timestamp13: Math.floor(new Date(Date.now() / 1000 - 29 * 24 * 60 * 60)),
      timestamp14: Math.floor(new Date(Date.now() / 1000 - 30 * 24 * 60 * 60)),
      timestamp15: Math.floor(new Date(Date.now() / 1000 - 31 * 24 * 60 * 60)),
      timestamp16: Math.floor(new Date(Date.now() / 1000 - 32 * 24 * 60 * 60)),
      timestamp17: Math.floor(new Date(Date.now() / 1000 - 60 * 24 * 60 * 60)),
      timestamp18: Math.floor(new Date(Date.now() / 1000 - 61 * 24 * 60 * 60)),
      timestamp19: Math.floor(new Date(Date.now() / 1000 - 180 * 24 * 60 * 60)),
      timestamp20: Math.floor(new Date(Date.now() / 1000 - 364 * 24 * 60 * 60)),
      timestamp21: Math.floor(new Date(Date.now() / 1000 - 365 * 24 * 60 * 60)),
      timestamp22: Math.floor(new Date(Date.now() / 1000 - 366 * 24 * 60 * 60)),
      timestamp23: Math.floor(
        new Date(Date.now() / 1000 - 2 * 365 * 24 * 60 * 60)
      )
    };
  }
};
</script>

<style>
</style>