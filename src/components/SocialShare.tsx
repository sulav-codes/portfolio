"use client";

import { motion } from "framer-motion";
import { Share2, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SocialShare() {
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl = "https://www.sulav-neupane.com.np";
  const pageTitle = "Sulav Neupane - Full Stack Developer";
  const pageDescription =
    "Check out this amazing portfolio of a Full Stack Developer from Nepal!";

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      pageUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      pageUrl
    )}&text=${encodeURIComponent(pageTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      pageUrl
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

  return (
    <div className="fixed right-4 sm:right-6 bottom-24 sm:bottom-28 z-40">
      {/* Share buttons menu */}
      {showShare && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="flex flex-col gap-2 mb-3 bg-background/95 backdrop-blur-sm p-3 rounded-2xl border shadow-lg"
        >
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("facebook")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-500/10 transition-colors group"
            aria-label="Share on Facebook"
          >
            <Facebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Facebook</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("twitter")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-sky-500/10 transition-colors group"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Twitter</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleShare("linkedin")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-600/10 transition-colors group"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">LinkedIn</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors group"
            aria-label="Copy link"
          >
            <Link2 className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Main share button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          size="icon"
          onClick={() => setShowShare(!showShare)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
          aria-label="Share this page"
        >
          <motion.div
            animate={{ rotate: showShare ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
}
