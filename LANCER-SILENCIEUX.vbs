Set sh = CreateObject("WScript.Shell")
dir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
sh.CurrentDirectory = dir
sh.Run "cmd /c node server.js", 0, False
WScript.Sleep 1200
sh.Run "http://127.0.0.1:8767/control.html", 1, False
