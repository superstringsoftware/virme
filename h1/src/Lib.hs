module Lib
    ( add
    ) where

import GHCJS.Types (JSVal)

foreign import javascript unsafe "$r = $1 + $2;" add :: Int -> Int -> Int
