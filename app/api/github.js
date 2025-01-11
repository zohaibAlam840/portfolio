// export default GitHubPushes;
import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import axios from "axios";
import Link from "next/link";

const GitHubPushesHeatmap = ({ username }) => {
  const [pushEvents, setPushEvents] = useState([]);
  const [error, setError] = useState("");
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  useEffect(() => {
    const fetchPushEvents = async () => {
      try {
        const headers = {
          Authorization: `token ${token}`,
        };

        let allPushEvents = [];
        let page = 1;

        // Paginate through all pages of events
        while (true) {
          const response = await axios.get(
            `https://api.github.com/users/${username}/events?page=${page}&per_page=100`,
            { headers }
          );

          if (response.status !== 200 || response.data.length === 0) {
            break; // Stop when no more events
          }

          const pushes = response.data
            .filter(event => event.type === "PushEvent")
            .filter(event => new Date(event.created_at) >= threeMonthsAgo);

          allPushEvents = [...allPushEvents, ...pushes];
          page++;

          // Avoid fetching beyond GitHub's API limit or when no pushes are left
          if (page > 10 || pushes.length === 0) {
            break;
          }
        }

        // Transform events into a date-count format
        const eventsByDate = allPushEvents.reduce((acc, event) => {
          const date = event.created_at.split("T")[0];
          acc[date] = (acc[date] || 0) + 1; // Increment the count for this date
          return acc;
        }, {});

        const heatmapData = Object.entries(eventsByDate).map(([date, count]) => ({
          date,
          count,
        }));

        setPushEvents(heatmapData);
      } catch (err) {
        setError("Error fetching push events.");
        console.error(err);
      }
    };

    fetchPushEvents();
  }, [username]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-3 text-center">
        GitHub Push Events (Last 3 Months)
      </h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <CalendarHeatmap
        startDate={threeMonthsAgo}
        endDate={new Date()}
        values={pushEvents}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-github-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": value
            ? `${value.date}: ${value.count} push${value.count > 1 ? "es" : ""}`
            : "No pushes",
        })}
        showWeekdayLabels={false}
        gutterSize={2}
        horizontal={true}
      />
      <style>{`
        .react-calendar-heatmap text {
          font-size: 8px;
          fill: #6b7280;
        }
        .color-empty { fill: #f5f5f5; }
        .color-github-1 { fill: #e0f3db; }
        .color-github-2 { fill: #a8ddb5; }
        .color-github-3 { fill: #43a2ca; }
        .color-github-4 { fill: #0868ac; }
        .react-calendar-heatmap rect:hover {
          stroke: #000;
          stroke-width: 1px;
        }
        .react-calendar-heatmap .legend {
          display: flex;
          justify-content: center;
          gap: 4px;
          margin-top: 8px;
        }
      `}</style>
      <div className="flex justify-center mt-4 text-sm text-gray-500">
        <Link href="https://github.com/zohaibAlam840" target="_blank">
        <p>clcik here to see the whole profile</p>
        </Link>
      </div>
    </div>
  );
};

export default GitHubPushesHeatmap;
