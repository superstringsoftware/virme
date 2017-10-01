module Main where

import Lib

import GHCJS.DOM
import GHCJS.DOM.Types
import GHCJS.DOM.Document
import GHCJS.DOM.Element
import GHCJS.DOM.Node

main :: IO ()
main = do
  doc <- currentDocumentUnchecked
  body <- getBodyUnchecked doc
  setInnerHTML body "<h1>Kia ora (Hi)</h1>"
