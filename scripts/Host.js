// Generated by CoffeeScript 1.6.3
(function() {
  var TerminalProxy,
    __slice = [].slice;

  window.Pipe = new window.PipeServerClass(pipe_name);

  TerminalProxy = (function() {
    function TerminalProxy(server_pipe) {
      this.server_pipe = server_pipe;
    }

    TerminalProxy.prototype.onCommand = function(command) {
      return this.t.exec(command);
    };

    TerminalProxy.prototype.bind = function(t) {
      this.t = t;
      this.server_pipe.registerRPC("command", this.onCommand.bind(this));
      return window.T = this;
    };

    TerminalProxy.prototype.echo = function() {
      var msg, _ref;
      msg = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.server_pipe).fireRPC.apply(_ref, ["echo"].concat(__slice.call(msg)));
    };

    TerminalProxy.prototype.set_prompt = function() {
      var prompt, _ref;
      prompt = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (_ref = this.server_pipe).fireRPC.apply(_ref, ["set_prompt"].concat(__slice.call(prompt)));
    };

    TerminalProxy.prototype.pause = function() {
      return this.server_pipe.fireRPC("pause");
    };

    TerminalProxy.prototype.resume = function() {
      return this.server_pipe.fireRPC("resume");
    };

    TerminalProxy.prototype.clear = function() {
      return this.server_pipe.fireRPC("clear");
    };

    return TerminalProxy;

  })();

  if (window.TerminalProxy == null) {
    window.TerminalProxy = new TerminalProxy(window.Pipe);
  }

}).call(this);

/*
//@ sourceMappingURL=Host.map
*/
