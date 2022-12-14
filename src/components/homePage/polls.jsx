import React from "react";
import { TopBar, PollEntry } from "./index";

const Polls = ({
  toggleSetupDialog,
  polls,
  setSelectedPoll,
  getLatest,
  loadMore,
}) => {
  return (
    <div
      id="left-side"
      className="relative pt-12 md:col-span-5 col-span-4 bg-green overflow-y-hidden"
    >
      <TopBar toggleSetupDialog={toggleSetupDialog} getLatest={getLatest} />
      <div className="relative overflow-y-auto h-full w-full">
        {polls.map((poll) => {
          let titleDesc = poll[0];
          let startEnd = poll[1];
          let creationTime = poll[2];
          let status = poll[3];
          let votes = poll[4];
          let isOpen = poll[5];
          // let isEligible = poll[6];
          let pollId = poll[7];
          return (
            <PollEntry
              titleDesc={titleDesc}
              startEnd={startEnd}
              creationTime={creationTime * 1000}
              status={status}
              votes={votes}
              isOpen={isOpen}
              pollId={pollId}
              poll={poll}
              setSelectedPoll={setSelectedPoll}
              key={pollId}
            />
          );
        })}
        <div
          className="w-full py-3 bg-green hover:bg-lgreen text-white font-medium text-center italic border"
          onClick={() => loadMore()}
        >
          Load more polls...
        </div>
      </div>
    </div>
  );
};

export default Polls;
