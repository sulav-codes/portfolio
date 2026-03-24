"use client";

import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function SocialShare() {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareRef = useRef<HTMLDivElement>(null);

  const pageUrl = "https://www.sulav-neupane.com.np";
  const pageTitle = "Sulav Neupane - Full Stack Developer";
  const pageDescription =
    "Check out this amazing portfolio of a Full Stack Developer from Nepal!";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl,
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl,
    )}&text=${encodeURIComponent(pageTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl,
    )}`,
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], "_blank");
    setShowShare(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    if (!showShare) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!shareRef.current) return;
      if (!shareRef.current.contains(event.target as Node)) {
        setShowShare(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [showShare]);

  return (
    <div
      ref={shareRef}
      className="fixed right-4 sm:right-5 bottom-22 sm:bottom-26 z-40"
    >
      {/* Share buttons menu */}
      {showShare && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="flex flex-col gap-1.5 mb-2.5 p-2.5 rounded-2xl border border-border/80 bg-background/90 supports-backdrop-filter:bg-background/70 backdrop-blur-xl shadow-2xl ring-1 ring-foreground/5"
        >
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-blue-500/10 transition-colors group"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4.5 w-4.5 text-[#1877F2] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Facebook</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-sky-500/10 transition-colors group"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4.5 w-4.5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">Twitter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("linkedin")}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-blue-600/10 transition-colors group"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4.5 w-4.5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">LinkedIn</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors group"
            aria-label="Copy link"
          >
            <Link2 className="h-4.5 w-4.5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xs sm:text-sm font-medium">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Main share button */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="p-0.75 rounded-full border border-border/70 bg-background/85 supports-backdrop-filter:bg-background/60 backdrop-blur-xl shadow-xl ring-1 ring-foreground/5"
      >
        <Button
          size="icon"
          onClick={() => setShowShare(!showShare)}
          className="h-11 w-11 sm:h-12 sm:w-12 rounded-full shadow-none hover:shadow-none transition-all"
          aria-label="Share this page"
        >
          <motion.div
            animate={{ rotate: showShare ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Share2 className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}
