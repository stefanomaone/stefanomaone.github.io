

public class GameController : MonoBehaviour
{
    public ObjectPool Pool;
    public Timer timer;
    public GameObject dataManager;
    private DataPersistenceManager Manager;
    


    public enum eState
    {
        Onplay,
        Onpause,
        OnGameOver,
        OnMainMenu
    }
    public eState state;
   

    public void goToState(eState gameState)
    {
        state = gameState;

        switch (state)
        {
            case eState.Onplay:
                timer.IsRunning = true;
                Time.timeScale = 1;
                break;

            case eState.Onpause:
                timer.IsRunning = false;
                Time.timeScale = 0;
                break;

            case eState.OnGameOver:
                timer.IsRunning = false;
                Pool.poolObjects.Clear();
                break;

            case eState.OnMainMenu:
                break;

        }
    }


    public void Start()
    {
        goToState(eState.Onplay);
        dataManager = GameObject.FindWithTag("DataManager");
        Manager=dataManager.GetComponent<DataPersistenceManager>();
        StartCoroutine(IncreaseVariableCoroutine());
    }

    public void OnSave()
    {
        if (dataManager != null)
        {

          Manager.SaveGame();

        }
        else
        {
            Debug.LogWarning("Object with tag 'dataManager' not found.");
        }
    }
    public void OnPause()
    {
        goToState(eState.Onpause);
    }

    public void Resume()
    {
        goToState(eState.Onplay);
        timer.Update();
    }

    private IEnumerator IncreaseVariableCoroutine()
    {
        while (Time.timeScale == 1)
        {
            yield return new WaitForSeconds(35f);
            Pool.SpawnGold();
        }
        yield return null;
    }

    public void GotoMainMaenu()
    {
        SceneManager.LoadScene(0);
    }

}





