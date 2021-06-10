package scala.cli

import scala.cli.commands._

object ScalaCli extends ScalaCliBase {
  val commands = Seq(
    About,
    Metabrowse,
    Clean,
    Compile,
    InstallCompletions,
    Repl,
    Package,
    Run,
    Test
  )
}
