Set sh = CreateObject("WScript.Shell")
dir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)
sh.CurrentDirectory = dir
result = sh.Run("cmd /c INSTALLER.bat", 0, True)
If result <> 0 Then
  MsgBox "Installation impossible. Lancez LANCER.bat pour voir le detail et verifier Node.js et votre connexion Internet.", 48, "Fortnite Ranked"
  WScript.Quit 1
End If
sh.Run "cmd /c node server.js", 0, False
WScript.Sleep 1200
sh.Run "http://127.0.0.1:8767/control.html", 1, False
