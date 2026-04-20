import React from "react";

const BarberNote = () => {
  return (
    <div className="min-h-screen bg-ink text-[#e5e5e5] flex items-center justify-center p-8 md:p-24 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
        {/* Left Sidebar Info */}
        <div className="md:col-span-3 space-y-2">
          <h2 className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-bold">
            A Note From The Chair
          </h2>
          <p className="text-[#c19a5b] italic text-sm">— No. 01 / Our trade</p>
        </div>

        {/* Main Content Area */}
        <div className="md:col-span-9 space-y-10">
          {/* Main Headline */}
          <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-[1.15] text-white max-w-3xl">
            We aren’t in the business of trends. We’re here to give you a
            haircut you’ll{" "}
            <span className="italic text-[#c19a5b] font-serif">still like</span>{" "}
            in six weeks.
          </h1>

          {/* Description Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-gray-400 leading-relaxed text-sm lg:text-base">
            <p>
              Halsted & Sons opened on a rainy Tuesday in October 2012 with two
              chairs, one mirror, and a borrowed espresso machine. Today there
              are six chairs — and the same espresso machine.
            </p>
            <p>
              We work slow on purpose. Every visit starts with a conversation
              about your hair, your week, and what you actually need. Then the
              clippers come out. Simple as that.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-4">
            <p className="font-serif italic text-xl text-[#c19a5b]">
              — David Halsted,{" "}
              <span className="not-italic opacity-80">owner</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarberNote;
